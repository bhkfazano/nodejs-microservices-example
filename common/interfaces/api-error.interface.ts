import { IValidationError } from './validation-error.interface';
import { ErrorType } from '../types/error.type';

export interface IApiError {
    statusCode: number;
    errorType: ErrorType;
    message: string;
    validationErrors?: IValidationError[];
}