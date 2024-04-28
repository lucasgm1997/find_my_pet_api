import UserEntity from "../../entities/user_entity"

interface IReadAllUsersUseCase extends IUserCase {
    execute(): Promise<UserEntity[]>
}
export default IReadAllUsersUseCase
