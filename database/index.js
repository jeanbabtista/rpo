import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { exit } from 'process';

// functions
import log from '../helpers/log.js';

// config
dotenv.config({ path: './config/.env' });
const { USER: user, PASSWORD: password, DATABASE_NAME: database } = process.env;

const connect = async () => {
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

export default {
  connect,
};
