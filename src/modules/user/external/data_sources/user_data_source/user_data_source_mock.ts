import UserEntity from "../../../domain/entities/user_entity"
import IUserDataSource from "../../../infra/data_sources/user_data_source_interface"

class UserDataSourceMock implements IUserDataSource {
    getById(id: string): Promise<UserEntity | undefined> {
        throw new Error("Method not implemented.")
    }
    create(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.")
    }
    update(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.")
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
    async getAll() {
        return [
            {
                id: 1,
                name: "John Doe",
                email: "some@mail.com",
            },
        ]
    }
}

export default UserDataSourceMock
