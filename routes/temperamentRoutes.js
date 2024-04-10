const express = require('express');
const temperamentController = require('../controllers/temperamentController');

const router = express.Router();

// Create a new temperament
router.post('/', temperamentController.createTemperament);

// Get all temperaments
router.get('/', temperamentController.getAllTemperaments);

// Get temperament by ID
router.get('/:id', temperamentController.getTemperamentById);

// Update a temperament
router.put('/:id', temperamentController.updateTemperament);

// Delete a temperament
router.delete('/:id', temperamentController.deleteTemperament);

module.exports = router;
