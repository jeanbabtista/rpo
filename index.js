import express from 'express'
import cookieSession from 'cookie-session'
import cors from 'cors'
import passport from './auth/passport.js'
import authRoute from './routes/auth.js'
import db from './database/index.js'

const app = express()
db.connect()

// middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
)
app.use(
  cookieSession({ name: 'session', keys: ['lama'], maxAge: 24 * 60 * 60 * 100 })
)
app.use(passport.initialize())
app.use(passport.session())

// config
const PORT = process.env.PORT
const url = `http://localhost:${PORT}`

// routes
app.use('/auth', authRoute)
app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.listen(PORT, () => console.log(url))
