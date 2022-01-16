const jwt = require('jsonwebtoken')
const models = require('../models')
const { config } = require('dotenv')

// config
config({ path: './config/.env' })
const { User, Role } = models

const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token)
    return res
      .status(403)
      .send({ error: true, message: 'JWT token must be provided' })

  const { JWT_SECRET: secret } = process.env
  const verifyAsync = () =>
    new Promise((resolve, reject) =>
      jwt.verify(token, secret, (e, decoded) => {
        if (e) reject(e)
        resolve(decoded)
      })
    )

  try {
    const decoded = await verifyAsync()
    req.id = decoded.id

    console.log('decoded token:', decoded)
    next()
  } catch ({ message }) {
    res.status(401).json({ error: true, message })
  }
}

const isAdmin = (req, res, next) => {
  const { id } = req

  try {
    const user = await User.findById(id).exec()
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (const role of roles) if (role.name === 'admin') return next()

    res.status(403).json({
      error: true,
      message: 'You do not have permission to view this content',
    })
  } catch ({ message }) {
    res.status(500).json({ error: true, message })
  }
}

module.exports = {
  verifyToken,
  isAdmin,
}
