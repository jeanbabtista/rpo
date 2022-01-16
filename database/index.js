const mongoose = require('mongoose')
const { config } = require('dotenv')

config({ path: './config/.env' })

const uri = process.env.DATABASE_URL

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Successfully connected to database.')
  } catch (e) {
    console.log(e.message)
  }
}

const db = { connect }

module.exports = db
