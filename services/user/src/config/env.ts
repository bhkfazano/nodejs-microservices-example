import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'local').required(),
        PORT: Joi.number().default(8080),
        DATABASE_TYPE: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export interface IEnv {
    env: string;
    port: number;
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        name: string;
    };
}

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    database: {
        type: envVars.DATABASE_TYPE,
        host: envVars.DATABASE_HOST,
        port: envVars.DATABASE_PORT,
        username: envVars.DATABASE_USERNAME,
        password: envVars.DATABASE_PASSWORD,
        name: envVars.DATABASE_NAME,
    },
} as IEnv;