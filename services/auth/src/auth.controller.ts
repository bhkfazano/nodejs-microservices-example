import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const getCurrentUser = async (req: Request, res: Response) => {
    res.send('Hi there!');
};

const signup = async (req: Request, res: Response) => {
    res.send('Hi there!!');
};

export { 
    getCurrentUser,
    signup
};