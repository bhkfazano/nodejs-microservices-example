import Joi from 'joi';

export const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/).message('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
});
