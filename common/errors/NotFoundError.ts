import { ErrorType } from "../types/error/error.type";
import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
    constructor(
        public message: string,
    ) {
        super(404, message, ErrorType.NotFound);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}