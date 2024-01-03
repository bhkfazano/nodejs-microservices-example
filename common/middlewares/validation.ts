import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ApiRequestValidationError } from '../errors/ApiRequestValidationError';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log(req)
    if (!errors.isEmpty()) {
        throw new ApiRequestValidationError(
            `Error processing request on: ${req.originalUrl}`,
            errors.array()
        );
    }
    next();
};