import { CustomError } from "../core/error/custom_error"

export class SQLError extends CustomError {
    private static readonly _statusCode = 500
    private readonly _code: number
    private readonly _logging: boolean
    private readonly _context: { [key: string]: any }

    constructor(params?: {
        code?: number
        message?: string
        logging?: boolean
        context?: { [key: string]: any }
    }) {
        const { code, message, logging } = params || {}

        super(message || "SQL Error")
        this._code = code || SQLError._statusCode
        this._logging = logging || false
        this._context = params?.context || {}

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, SQLError.prototype)
    }

    get errors() {
        return [{ message: this.message, context: this._context }]
    }

    get statusCode() {
        return this._code
    }

    get logging() {
        return this._logging
    }
}
