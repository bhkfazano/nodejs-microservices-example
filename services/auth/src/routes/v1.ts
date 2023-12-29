import express from 'express';
import { getCurrentUser, signup } from '../auth.controller';
import { signupValidation } from '../auth.validation';

const router = express.Router();

router.post('/signup', signupValidation, signup);
router.get('/current-user', getCurrentUser);

export { router as userRouter };