interface ICreateUserUseCase extends IUserCase {
    execute(user: { name: string; email: string }): Promise<void>
}

export default ICreateUserUseCase
