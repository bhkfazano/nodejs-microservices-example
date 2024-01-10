import { IApiError } from "../interfaces/api-error.interface";
import { ErrorType } from "../types/error/error.type";

export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string, 
        public errorType: ErrorType,
        public stack?: string
    ) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    public serialize(): IApiError {
        return {
            statusCode: this.statusCode,
            errorType: this.errorType,
            message: this.message,
        }
    }
}