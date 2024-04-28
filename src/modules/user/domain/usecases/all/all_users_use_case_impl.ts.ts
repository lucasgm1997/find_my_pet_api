import UserEntity from "../../entities/user_entity"
import IUserRepository from "../../repositories/user_repository_interface"
import IReadAllUsersUseCase from "./all_users_use_case_interface"

class AllUsersUseCaseImpl implements IReadAllUsersUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    execute(): Promise<UserEntity[]> {
        const allUsers = this.userRepository.getAll()
        return allUsers
    }
}

export default AllUsersUseCaseImpl
