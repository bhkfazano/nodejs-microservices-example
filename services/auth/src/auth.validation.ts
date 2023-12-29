import { body } from 'express-validator';

export const signupValidation = [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .matches(/\d/)
        .matches(/[a-zA-Z]/)
        .withMessage('Password must be between 4 and 20 characters and contain at least one number')
];