import { Router } from 'express';
const router = Router();

// controllers
import user from '../controllers/user.js';

// routes
router.get('/', user.findAll);
router.get('/:id', user.findOne);
router.post('/new', user.insert);
router.put('/:id', user.update);
router.delete('/:id', user.remove);

export default router;
