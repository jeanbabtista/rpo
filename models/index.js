const mongoose = require('mongoose')
const User = require('./User')
const Role = require('./Role')

mongoose.Promise = global.Promise

const models = {
  User,
  Role,
  roles: ['user', 'admin'],
}

class RoleExistsError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
}

const init = async () => {
  try {
    const user = await Role.find({ name: 'user' })
    if (user) throw new RoleExistsError('User role already exists')
    await new Role({ name: 'user' }).save()

    const admin = await Role.findOne({ name: 'admin' })
    if (admin) throw new RoleExistsError('Admin role already exists')
    await new Role({ name: 'admin' }).save()

    console.log('Successfully inserted roles [`user`, `admin`]')
  } catch (e) {
    if (e instanceof RoleExistsError) return
    console.log('Error:', e.message)
  }
}

init()

module.exports = models
