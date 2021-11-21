const passport = require('passport');
const User = require('../../models/user');
const express = require('express');
const router = express.Router();

// passport.serializeUser((user, done) => done(null, user));

// controllers
const auth = require('../../controllers/auth');

// routes
router.post('/signup', auth.signup);

module.exports = router;
