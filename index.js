// database connection
require('dotenv').config({ path: './config/.env' });
require('./database').connect(
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE_NAME
);

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// functions
const log = require('./helpers/log');
const msg = require('./helpers/jsonMsg');

// config
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

app.use((req, res, next) =>
  res.status(404).json(msg(true, 'Error: page not found.'))
);

// listen
const { PORT } = process.env;
app.listen(PORT, () => {
  log('Connect here', `http://localhost:${PORT}/api/user`);
});
