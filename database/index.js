const mongoose = require('mongoose');
const { exit } = require('process');

// functions
const log = require('../helpers/log');

const connect = async (user, password, database) => {
  const url = `mongodb+srv://${user}:${password}@cluster0.buzm7.mongodb.net/${database}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    log('Database info', 'Successfully connected to the database');
  } catch (e) {
    log('Connection error', e.message);
    exit();
  }
};

module.exports = {
  connect,
};
