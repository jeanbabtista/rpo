<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const { exit } = require('process');

connect = async (user, password, database) => {
  const url = `mongodb+srv://${user}:${password}@cluster0.buzm7.mongodb.net/${database}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database.');
  } catch (e) {
    console.log('Connection error:', e.message);
    exit();
  }
};

// config
const user = 'luka_lovenjak';
const pw = 'luka123';
const db = 'testDb';
connect(user, pw, db);

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
=======
// database connection
import { config } from 'dotenv'
import db from './config/db.js'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'
>>>>>>> dff9d92d365e8eee931847fccc3bf6d91d7640a3

// routes
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'

// functions
import log from './helpers/log.js'
import msg from './helpers/jsonMsg.js'

// config
const app = express()
config({ path: './config/.env' })
db.connect()

// middleware
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

// routes
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use((req, res) => res.status(404).json(msg(true, 'Error: page not found.')))

// listen
const { PORT } = process.env
app.listen(PORT, () => log('Connect here', `http://localhost:${PORT}/api/user`))
