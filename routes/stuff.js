const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, stuffController.createThing);

router.get('/:id', stuffController.findOneThing);

router.put('/:id', auth, multer, stuffController.updateThing);

router.delete('/:id', auth, stuffController.deleteThing);

router.get('/', stuffController.findAllThings);

module.exports = router;