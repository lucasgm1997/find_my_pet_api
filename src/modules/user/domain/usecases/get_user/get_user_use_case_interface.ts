import UserEntity from "../../entities/user_entity"

interface IGetUserUseCase extends IUserCase {
    execute(id: string): Promise<UserEntity | undefined>
}
export default IGetUserUseCase
