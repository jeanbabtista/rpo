const express = require('express');
const router = express.Router();

// controllers
const user = require('../controllers/user');

// routes
router.get('/', user.findAll);
router.get('/:id', user.findOne);
router.post('/new', user.insert);
router.put('/:id', user.update);
router.delete('/:id', user.remove);

module.exports = router;
