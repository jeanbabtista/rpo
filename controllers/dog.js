const Dog = require('../models/Dog');

const msg = (error, message, data = null) => ({ error, message, data });

const findAll = async (req, res, next) => {
  try {
    const response = await Dog.find();
    res.json(msg(false, 'Successfully found all of the dogs', response));
  } catch (e) {
    res.json(msg(true, e.message));
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Dog.findById(id);
    res.json(msg(false, `Successfully found dog with id ${id}`, response));
  } catch (e) {
    res.json(msg(true, e.message));
  }
};

const insert = async (req, res, next) => {
  console.log(req.body);

  const dog = new Dog({ ...req.body });

  try {
    const response = await dog.save();
    res.json(msg(false, 'Successfully created dog', response));
  } catch (e) {
    res.json(msg(true, e.message));
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const updated = { ...req.body };

  try {
    await Dog.findByIdAndUpdate(id, { $set: updated });
    const dog = await Dog.findById(id);
    res.json(msg(false, `Successfully updated the dog with id ${id}`, dog));
  } catch (e) {
    res.json(msg(true, e.message));
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Dog.findByIdAndRemove(id);
    const dog = await Dog.findById(id);
    res.json(msg(false, `Successfully removed dog with id ${id}`, dog));
  } catch (e) {
    res.json(msg(true, e.message));
  }
};

module.exports = {
  findAll,
  findOne,
  insert,
  update,
  remove,
};
