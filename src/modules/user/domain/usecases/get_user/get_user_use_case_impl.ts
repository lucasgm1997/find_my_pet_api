import UserEntity from "../../entities/user_entity"
import IUserRepository from "../../repositories/user_repository_interface"
import IGetUserUseCase from "./get_user_use_case_interface"

class GetUserUseCaseImpl implements IGetUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}
    execute(id: string): Promise<UserEntity | undefined> {
        return this.userRepository.getById(id)
    }
}
export default GetUserUseCaseImpl
