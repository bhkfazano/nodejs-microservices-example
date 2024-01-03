import express from 'express';
import { getCurrentUser, signup } from '../auth.controller';
import { signupValidation } from '../auth.validation';
import { validate } from '../../../../common/middlewares/validation'

const router = express.Router();

router.post('/signup', signupValidation, validate, signup);
router.get('/current-user', getCurrentUser);

export { router as userRouter };