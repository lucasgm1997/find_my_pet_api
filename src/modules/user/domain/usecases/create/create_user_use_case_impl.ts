import IUserRepository from "../../repositories/user_repository_interface"
import ICreateUserUseCase from "./create_user_use_case_interface"

class CreateUserUseCaseImpl implements ICreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}
    execute(user: { name: string; email: string }): Promise<void> {
        return this.userRepository.create(user)
    }
}

export default CreateUserUseCaseImpl
