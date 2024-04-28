const users = [
    { id: 1, fullName: "UserEntity The First" },
    { id: 2, fullName: "UserEntity The Second" },
]

const getAll = () => Promise.resolve(users)
const getById = (id: any) =>
    new Promise((resolve, reject) => {
        id = Number(id)

        //chec  k if is a number
        if (isNaN(id)) {
            reject(new Error("From service: Invalid user ID"))
        }

        const user = users.find((user) => user.id === id)

        if (user) {
            resolve(user)
        } else {
            reject(new Error("From service: UserEntity not found"))
        }
    })

interface IUserRepository {
    getAll(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity | undefined>
}

class UserRepository implements IUserRepository {
    async getAll(): Promise<UserEntity[]> {
        // Implementation to fetch all users from the data source
        throw new Error("Method not implemented.")
    }

    async getById(id: string): Promise<UserEntity | undefined> {
        // Implementation to fetch user by id from the data source
        throw new Error("Method not implemented.")
    }
}

interface IUserService {
    getAll(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity | undefined>
}

class UserService implements IUserService {
    getAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.")
    }
    getById(id: string): Promise<UserEntity | undefined> {
        throw new Error("Method not implemented.")
    }
    private static userRepository: IUserRepository

    static initialize(userRepository: IUserRepository) {
        UserService.userRepository = userRepository
    }

    static async getAll(): Promise<UserEntity[]> {
        return UserService.userRepository.getAll()
    }

    static async getById(id: string): Promise<UserEntity | undefined> {
        return UserService.userRepository.getById(id)
    }
}

export { getAll, getById, UserService }
