import express from "express"
import { Pool } from "pg"

// Import use cases
import CreateUserUseCaseImpl from "./domain/usecases/create/create_user_use_case_impl"
import UserRepositoryImpl from "./infra/repositories/user_repository_impl"
import UserDataSourceSql from "./external/data_sources/user_data_source/user_data_source_sql"
import AllUsersUseCaseImpl from "./domain/usecases/all/all_users_use_case_impl.ts"
import UserDataSourceMock from "./external/data_sources/user_data_source/user_data_source_mock"
import BadRequestError from "../../custom_errors/api_errors"
import { SQLError } from "../../custom_errors/sql_error"

const router = express.Router()

router.post("/create", async (req, res, next) => {
    const { name, email, phoneNumber } = req.body

    if (!name || !email || phoneNumber) {
        return next(new BadRequestError({ message: "Missing required fields" }))
    }

    const pool = new Pool({
        port: 5432,
        password: "123456",
        user: "admin",
        host: "postgres_db",
        database: "find_my_pet",
    })

    const client = await pool.connect()
    const dataSource = new UserDataSourceSql(client)
    const repository = new UserRepositoryImpl(dataSource)
    const createUserCase = new CreateUserUseCaseImpl(repository)

    await createUserCase
        .execute({
            name,
            email,
        })
        .then(() => {
            res.status(201).json({ message: "User created" })
        })
        .catch((error) => {
            next(
                new SQLError({
                    code: 500,
                    message: "Error to create user",
                    context: error,
                    logging: false,
                })
            )
        })

    client.release()
})

router.get("/all", async (req, res, next) => {
    const isOffline = req.query.offline === "true"

    const pool = new Pool({
        port: 5432,
        password: "123456",
        user: "admin",
        host: "postgres_db",
        database: "find_my_pet",
    })

    const client = await pool.connect()

    let dataSource

    if (isOffline) {
        dataSource = new UserDataSourceMock()
    } else {
        dataSource = new UserDataSourceSql(client)
    }
    const repository = new UserRepositoryImpl(dataSource)
    const allUsersUseCase = new AllUsersUseCaseImpl(repository)

    await allUsersUseCase
        .execute()
        .then((users) => {
            if (users && users.length > 0) {
                res.status(200).json(users)
            } else {
                res.status(404).json({ message: "No users found" })
            }
        })
        .catch((error) => {
            next(
                new SQLError({
                    code: 500,
                    message: "Failed to fetch users",
                    context: error,
                    logging: false,
                })
            )
        })

    client.release()
})

export default router
