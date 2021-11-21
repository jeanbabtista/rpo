const msg = require('../helpers/jsonMsg');

const signup = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  res.json(msg(null, 'Successfully registered!', { name, email, password }));
};

module.exports = {
  signup,
};
