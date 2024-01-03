import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/CustomError';
import { IApiError } from '../interfaces/api-error.interface';

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.locals.errorMessage = err.message;

    res.status(err.statusCode).send(err.serialize() as IApiError);
};