import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

import { CustomError } from "../errors/CustomError";
import { ErrorType } from "../types/error.type";


export const errorConverter = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    if (!(error instanceof CustomError)) {
        const statusCode = 500;
        const message = error.message || httpStatus[statusCode];
        error = new CustomError(statusCode, message, ErrorType.InternalServerError, err.stack);
    }
    next(error);
};