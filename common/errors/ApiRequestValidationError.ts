import { ValidationError } from "express-validator";
import { IApiError } from "../interfaces/api-error.interface";
import { ErrorType } from "../types/error.type";
import { CustomError } from "./CustomError";

export class ApiRequestValidationError extends CustomError {
    constructor(
        public message: string,
        public validationErrors: ValidationError[]
    ) {
        super(422, message, ErrorType.UnprocessableEntity);
        this.validationErrors = validationErrors;

        Object.setPrototypeOf(this, ApiRequestValidationError.prototype);
    }

    public serialize(): IApiError {
        return {
            statusCode: this.statusCode,
            errorType: this.errorType,
            message: this.message,
            validationErrors: this.validationErrors.map((err: ValidationError) => {
                return {
                    field: err.type == 'field' ? err.path : '',
                    value: err.type == 'field' ? err.value : '',
                    message: err.msg
                }
            })
        }
    }
    
}