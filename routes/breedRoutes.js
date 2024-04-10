// routes/breedRoutes.js
const express = require('express');
const breedController = require('../controllers/breedController');
const { populateDatabase } = require('../models/populateDatabase'); 

const router = express.Router();

// Create a new breed
router.post('/', breedController.createBreed);

// Get all breeds
router.get('/', breedController.getAllBreeds);

// Get breed by ID
router.get('/:id', breedController.getBreedById);

// Update a breed
router.put('/:id', breedController.updateBreed);

// Delete a breed
router.delete('/:id', breedController.deleteBreed);

// Populate database route
router.post('/populate', async (req, res) => {
  await populateDatabase();
  res.send('Database populated successfully');
});

module.exports = router;
