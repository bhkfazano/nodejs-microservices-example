import Joi from 'joi';

export const getUserSchema = Joi.object({
    id: Joi.number().required(),
});
