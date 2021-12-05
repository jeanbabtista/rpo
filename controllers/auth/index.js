import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

// config
config({ path: '../../config/.env' })
const { JWT_SECRET } = process.env

// models
import User from '../../models/auth.js'

// helpers
import msg from '../../helpers/jsonMsg.js'

// exports
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    console.log(name, email, password)

    const takenUser = await User.findOne({ email })
    if (takenUser) throw new Error('Email is already taken.')

    const token = jwt.sign({ name, email, password }, JWT_SECRET, {
      expiresIn: '5m',
    })

    console.log('JWT token created:', token)

    return res.json(msg(null, 'Successfully registered!', { token }))
  } catch (e) {
    res.status(400).json(msg(e, e.message))
  }
}

const verify = (req, res) => {
  try {
    const { token } = req.body

    if (!token) throw new Error('Token is not valid.')

    const decoded = jwt.verify(token, JWT_SECRET)
    console.log('decoded JWT:', decoded)
  } catch (e) {
    res.status(400).json(msg(e, e.message))
  }
}

export default {
  signup,
  verify,
}
