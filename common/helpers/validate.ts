import { Schema } from 'joi';
import { JoiRequestValidationError } from '../errors/JoiRequestValidationError';

export function validate<T>(schema: Schema, data: T): T {
    const { error, value } = schema.validate(data);
    if (error) {
        throw new JoiRequestValidationError(error.message, error);
    }
    return value;
}