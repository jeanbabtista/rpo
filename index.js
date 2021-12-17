import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000
const url = `http://localhost:${PORT}`

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.listen(PORT, () => console.log(url))
