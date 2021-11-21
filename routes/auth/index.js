import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../../models/user.js';
const router = Router();

// controllers
import auth from '../../controllers/auth.js';

// routes
router.post(
  '/signup',
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').notEmpty().isLength({ min: 8 }),
  auth.signup
);

export default router;
