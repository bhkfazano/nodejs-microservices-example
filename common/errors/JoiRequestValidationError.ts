import { ValidationError, ValidationErrorItem } from "joi";
import { IApiError } from "../interfaces/api-error.interface";
import { ErrorType } from "../types/error/error.type";
import { CustomError } from "./CustomError";

export class JoiRequestValidationError extends CustomError {
    constructor(
        public message: string,
        public validationError: ValidationError
    ) {
        super(422, message, ErrorType.UnprocessableEntity);
        this.validationError = validationError;

        Object.setPrototypeOf(this, JoiRequestValidationError.prototype);
    }

    public serialize(): IApiError {
        return {
            statusCode: this.statusCode,
            errorType: this.errorType,
            message: this.message,
            validationErrors: this.validationError.details.map((err: ValidationErrorItem) => {
                return {
                    field: err.path.join('.'),
                    value: this.validationError._original[err.path.join('.')],
                    message: err.message
                }
            })
        }
    }

}