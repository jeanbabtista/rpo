import msg from '../helpers/jsonMsg.js'

// database models
import User from '../models/user.js'

const findAll = async (req, res, next) => {
  try {
    const response = await User.find()
    res.json(msg(false, 'Successfully found all of the users', response))
  } catch (e) {
    res.json(msg(true, e.message))
  }
}

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const response = await User.findById(id)
    res.json(msg(false, `Successfully found user with id ${id}`, response))
  } catch (e) {
    res.json(msg(true, e.message))
  }
}

const insert = async (req, res, next) => {
  console.log(req.body)

  const user = new User({ ...req.body })

  try {
    const response = await user.save()
    res.json(msg(false, 'Successfully created user', response))
  } catch (e) {
    res.json(msg(true, e.message))
  }
}

const update = async (req, res, next) => {
  const { id } = req.params
  const updated = { ...req.body }

  try {
    await findByIdAndUpdate(id, { $set: updated })
    const user = await User.findById(id)
    res.json(msg(false, `Successfully updated the user with id ${id}`, user))
  } catch (e) {
    res.json(msg(true, e.message))
  }
}

const remove = async (req, res, next) => {
  const { id } = req.params

  try {
    await User.findByIdAndRemove(id)
    const user = await User.findById(id)
    res.json(msg(false, `Successfully removed user with id ${id}`, user))
  } catch (e) {
    res.json(msg(true, e.message))
  }
}

export default {
  findAll,
  findOne,
  insert,
  update,
  remove,
}
