import UserEntity from "../../domain/entities/user_entity"

interface IUserDataSource extends IReadUserDataSource, IWriteUserDataSource {}

interface IReadUserDataSource {
    getAll(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity | undefined>
}

interface IWriteUserDataSource {
    create(user: { name: string; email: string }): Promise<void>
    update(user: UserEntity): Promise<void>
    delete(id: string): Promise<void>
}

export default IUserDataSource
