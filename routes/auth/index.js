const passport = require('passport');
const User = require('../../models/user');

passport.serializeUser((user, done) => done(null, user));

module.exports = 1;
