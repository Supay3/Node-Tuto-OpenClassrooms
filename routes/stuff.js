const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');

router.post('/', stuffController.createThing);

router.get('/:id', stuffController.findOneThing);

router.put('/:id', stuffController.updateThing);

router.delete('/:id', stuffController.deleteThing);

router.get('/', stuffController.findAllThings);

module.exports = router;