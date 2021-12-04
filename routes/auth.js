import { Router } from 'express'
const router = Router()

import auth from '../controllers/auth/index.js'

router.post('/signup', auth.signup)
router.post('/verify', auth.verify)

export default router
