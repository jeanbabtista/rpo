import mongoose from 'mongoose'
import { config } from 'dotenv'

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

export default db
