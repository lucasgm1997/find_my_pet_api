import UserEntity from "../../domain/entities/user_entity"
import IUserRepository from "../../domain/repositories/user_repository_interface"

import IUserDataSource from "../data_sources/user_data_source_interface"

class UserRepositoryImpl<T extends IUserDataSource> implements IUserRepository {
    private _dataSouce: T

    constructor(dataSouce: T) {
        this._dataSouce = dataSouce
    }
    create(user: { name: string; email: string }): Promise<void> {
        return this._dataSouce.create(user)
    }

    update(user: UserEntity): Promise<void> {
        return this._dataSouce.update(user)
    }
    delete(id: string): Promise<void> {
        return this._dataSouce.delete(id)
    }
    getAll(): Promise<UserEntity[]> {
        return this._dataSouce.getAll()
    }
    getById(id: string): Promise<UserEntity | undefined> {
        return this._dataSouce.getById(id)
    }
}

export default UserRepositoryImpl
