const Breed = require('../models/breedModel');

// Create a new breed
exports.createBreed = async (req, res) => {
  try {
    const { name, origin } = req.body;
    const breed = await Breed.create({ name, origin });
    res.json(breed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all breeds
exports.getAllBreeds = async (req, res) => {
  try {
    const breeds = await Breed.findAll();
    res.json(breeds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get breed by ID
exports.getBreedById = async (req, res) => {
  try {
    const { id } = req.params;
    const breed = await Breed.findByPk(id);
    if (!breed) {
      res.status(404).json({ message: 'Breed not found' });
      return;
    }
    res.json(breed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a breed
exports.updateBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, origin } = req.body;
    const breed = await Breed.findByPk(id);
    if (!breed) {
      res.status(404).json({ message: 'Breed not found' });
      return;
    }
    breed.name = name;
    breed.origin = origin;
    await breed.save();
    res.json(breed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a breed
exports.deleteBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const breed = await Breed.findByPk(id);
    if (!breed) {
      res.status(404).json({ message: 'Breed not found' });
      return;
    }
    await breed.destroy();
    res.json({ message: 'Breed deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
