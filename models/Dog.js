const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema({
  name: String,
  eyeColor: String,
  age: Number,
});

const Dog = mongoose.model('Test', dogSchema);
module.exports = Dog;
