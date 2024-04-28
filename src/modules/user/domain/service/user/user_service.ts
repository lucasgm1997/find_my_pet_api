import { IUserService } from "./user_service_interface"

class UserService implements IUserService {
    getAll(): Promise<any> {
        throw new Error("Method not implemented.")
    }
    getById(id: any): Promise<any> {
        throw new Error("Method not implemented.")
    }
    create(data: any): Promise<any> {
        throw new Error("Method not implemented.")
    }
    update(id: any, data: any): Promise<any> {
        throw new Error("Method not implemented.")
    }
    delete(id: any): Promise<any> {
        throw new Error("Method not implemented.")
    }
}
