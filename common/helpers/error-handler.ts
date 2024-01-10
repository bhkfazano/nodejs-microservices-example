import { sendUnaryData } from "@grpc/grpc-js"
import * as grpc from "@grpc/grpc-js"
import { JoiRequestValidationError } from "../errors/JoiRequestValidationError";
import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";

const errorMap = (error: Error) => {
    if (error instanceof JoiRequestValidationError) return grpc.status.INVALID_ARGUMENT;
    if (error instanceof NotFoundError) return grpc.status.NOT_FOUND;
    if (error instanceof ConflictError) return grpc.status.ALREADY_EXISTS;
    return grpc.status.INTERNAL;
}

export function errorHandler<T>(error: Error, callback: sendUnaryData<T>): void {
    callback({
        code: errorMap(error),
        message: error.message,
        details: error.stack
    }, null)
}
