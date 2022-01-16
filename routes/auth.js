const { Router } = require('express')
const { config } = require('dotenv')

config({ path: './config/.env' })
const router = Router()
const { CLIENT_URL } = process.env

module.exports = router
