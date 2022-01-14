import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'

const GOOGLE_CLIENT_ID = '309527236214-ursifkdjjok1qi8v99evlu2ttg67munj.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

export default passport
