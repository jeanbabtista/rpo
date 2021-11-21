const { Schema } = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    hashed: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: 'normal',
    },
    reset_password: {
      data: String,
      default: '',
    },
  },
  { timestamps: true }
);

userSchema.methods = {
  salt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
  encrypt: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (e) {
      return '';
    }
  },
  authenticate: function (password) {
    return this.encrypt(password) === this.hashed;
  },
};

// virtuals are not stored in MongoDB, they are computed
userSchema
  .virtual('password')
  .set(function (password) {
    this.password = password;
    this.salt = this.salt();
    this.hashed = this.encrypt(password);
  })
  .get(() => this.password);

const User = mongoose.model('User', userSchema);
module.exports = User;
