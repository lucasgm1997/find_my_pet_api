import { ClientBase, DatabaseError } from "pg"
import IUserDataSource from "../../../infra/data_sources/user_data_source_interface"
import UserEntity from "../../../domain/entities/user_entity"

class UserDataSourceSql implements IUserDataSource {
    private db: ClientBase

    constructor(db: ClientBase) {
        this.db = db
    }
    getAll(): Promise<UserEntity[]> {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM users", (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res.rows)
                }
            })
        })
    }

    create(user: { name: string; email: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!user.name) {
                reject(new Error("Name is required"))
            }

            if (!user.email) {
                reject(new Error("Email is required"))
            }

            this.db.query(
                "INSERT INTO users (name, email) VALUES ($1, $2)",
                [user.name, user.email],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    getById(id: string): Promise<UserEntity | undefined> {
        throw new Error("Method not implemented.")
    }

    update(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.")
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

export default UserDataSourceSql
