const models = require('../models')

const { User } = models

const checkIfUserExists = async (req, res, next) => {
  const { username, email } = req.body

  const handleUserExists = (user, message) => {
    if (user) return res.status(400).json({ error: true, message })
  }

  try {
    const userFromUsername = await User.findOne({ username }).exec()
    handleUserExists(userFromUsername, 'Username already exists')

    const userFromEmail = await User.findOne({ email }).exec()
    handleUserExists(userFromEmail, 'Email already exists')

    next()
  } catch ({ message }) {
    res.status(500).json({ error: true, message })
  }
}

const checkRoleExists = (req, res, next) => {
  const { roles } = req.body
  if (!roles) return next()

  for (const role of roles)
    if (models.roles.includes(role))
      return res
        .status(400)
        .json({ error: true, message: 'Role does not exist' })

  next()
}

module.exports = {
  checkIfUserExists,
  checkRoleExists,
}
