const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth, stuffController.createThing);

router.get('/:id', stuffController.findOneThing);

router.put('/:id', auth, stuffController.updateThing);

router.delete('/:id', auth, stuffController.deleteThing);

router.get('/', stuffController.findAllThings);

module.exports = router;