const express = require('express')
const cors = require('cors')
const authRoute = require('./routes/auth.js')
const db = require('./database')
const models = require('./models')

const app = express()
db.connect()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config
const PORT = process.env.PORT
const url = `http://localhost:${PORT}`

// routes
app.use('/auth', authRoute)
app.get('/', (req, res) => {
  models
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => console.log(url))
