import { Strategy } from 'passport-google-oauth20'
import dotenv from 'dotenv'

// database
import User from '../models/user.js'

// config
dotenv.config({ path: '../config/.env' })
const { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID, PATH } = process.env

// passport setup
passport.use(
  new Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${PORT}/auth`,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const user = await User.findById(accessToken.id)

      const { googleId, email, first_name, last_name } = profile

      if (!user)
        await User.create({
          googleId,
          email,
          first_name,
          last_name,
        })
    }
  )
)
