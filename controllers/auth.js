const msg = require('../helpers/jsonMsg');

const signup = (req, res) => res.json(msg(null, 'Successfully registered!'));

module.exports = {
  signup,
};
