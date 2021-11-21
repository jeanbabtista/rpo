import { Router } from 'express';
import User from '../../models/user.js';
const router = Router();

// passport.serializeUser((user, done) => done(null, user));

// controllers
import auth from '../../controllers/auth.js';

// routes
router.post('/signup', auth.signup);

export default router;
