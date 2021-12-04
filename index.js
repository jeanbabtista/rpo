// database connection
import { config } from 'dotenv'
import db from './config/db.js'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'

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
