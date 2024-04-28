interface IReadUserService {
    getAll(): Promise<any>
    getById(id: any): Promise<any>
}

interface IWriteUserService {
    create(data: any): Promise<any>
    update(id: any, data: any): Promise<any>
    delete(id: any): Promise<any>
}

interface IUserService extends IReadUserService, IWriteUserService {}

export { IUserService }
