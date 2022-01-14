import express from 'express'
import cookieSession from 'cookie-session'
import cors from 'cors'
import passport from './auth/passport.js'
import authRoute from './routes/auth.js'

const app = express()

// middleware
app.use(cookieSession({ name: 'session', keys: ['lama'], maxAge: 24 * 60 * 60 * 100 }))
app.use(passport.initialize())
app.use(passport.session())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }),
)

// config
const PORT = process.env.PORT || 5000
const url = `http://localhost:${PORT}`

// routes
app.use('/auth', authRoute)
app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.listen(PORT, () => console.log(url))
