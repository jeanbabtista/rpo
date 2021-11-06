const express = require('express');
const router = express.Router();

const dogController = require('../controllers/dog');

router.get('/', dogController.findAll);
router.get('/:id', dogController.findOne);
router.post('/new', dogController.insert);
router.put('/:id', dogController.update);
router.delete('/:id', dogController.remove);

module.exports = router;
