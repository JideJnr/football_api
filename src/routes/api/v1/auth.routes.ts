import express from 'express';
import { login, resetPassword, signup } from '../../../controllers/auth.controller.js';
import { signupValidator } from '../../../utils/validators.js';

const router = express.Router();


router.post('/signup', signupValidator, signup);
router.post('/signin', login);
router.post('/resetPassword', resetPassword);

export default router;
