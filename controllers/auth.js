const msg = require('../helpers/jsonMsg');

const authRegister = (req, res) =>
  res.json(msg(null, 'Successfully registered!'));

exports.authRegister = authRegister;
