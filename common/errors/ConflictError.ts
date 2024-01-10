import { ErrorType } from "../types/error/error.type";
import { CustomError } from "./CustomError";

export class ConflictError extends CustomError {
    constructor(
        public message: string,
    ) {
        super(409, message, ErrorType.Conflict);

        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}