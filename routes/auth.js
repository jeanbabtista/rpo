import { Router } from 'express'
import passport from 'passport'
import { config } from 'dotenv'

config({ path: './config/.env' })
const router = Router()
const { CLIENT_URL } = process.env

router.get('/login/success', (req, res) => {
  if (!req.user) {
    console.log('Failed to log in')
    res.json({ error: true, message: 'Failed to log in' })
  }

  console.log('Successfully logged in')
  res.json({
    error: false,
    message: 'Successfully logged in',
    user: req.user,
    cookies: req.cookies,
  })
})

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    error: false,
    message: 'Failed to log in',
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(CLIENT_URL)
})

router.post(
  '/google',
  passport.authenticate('google', { scope: ['profile'] }),
  (req, res) => {
    console.log('post auth/google:', req.body.tokenId)
  }
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: `${CLIENT_URL}/rpo`,
    failureRedirect: '/login/failed',
  })
)

export default router
