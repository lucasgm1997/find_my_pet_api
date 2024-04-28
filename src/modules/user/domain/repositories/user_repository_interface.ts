import UserEntity from "../entities/user_entity"

interface IUserRepository extends IReadUserRepository, IWriteUserRepository {}

interface IReadUserRepository {
    getAll(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity | undefined>
}

interface IWriteUserRepository {
    create(user: { name: string; email: string }): Promise<void>
    update(user: UserEntity): Promise<void>
    delete(id: string): Promise<void>
}

export default IUserRepository
