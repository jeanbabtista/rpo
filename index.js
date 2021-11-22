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

// routes
app.use('/api/dog', require('./routes/dog'));

// listen
app.listen(PORT, () => console.log(`http://localhost:${PORT}/api/dog`));
