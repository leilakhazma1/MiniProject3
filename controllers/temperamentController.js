const Temperament = require('../models/temperamentModel');

const temperamentController = {
  // Get all temperaments
  getAllTemperaments: async (req, res) => {
    try {
      const temperaments = await Temperament.getAll();
      res.json(temperaments);
    } catch (err) {
      console.error('Error getting all temperaments:', err);
      res.status(500).send('Error getting all temperaments');
    }
  },

  // Get a temperament by ID
  getTemperamentById: async (req, res) => {
    const { id } = req.params;
    try {
      const temperament = await Temperament.getById(id);
      res.json(temperament);
    } catch (err) {
      console.error('Error getting temperament by ID:', err);
      res.status(500).send('Error getting temperament by ID');
    }
  },

  // Create a new temperament
  createTemperament: async (req, res) => {
    const { name } = req.body;
    try {
      const newTemperament = await Temperament.create(name);
      res.status(201).json(newTemperament);
    } catch (err) {
      console.error('Error creating new temperament:', err);
      res.status(500).send('Error creating new temperament');
    }
  },

  // Update a temperament by ID
  updateTemperamentById: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedTemperament = await Temperament.updateById(id, name);
      res.json(updatedTemperament);
    } catch (err) {
      console.error('Error updating temperament by ID:', err);
      res.status(500).send('Error updating temperament by ID');
    }
  },

  // Delete a temperament by ID
  deleteTemperamentById: async (req, res) => {
    const { id } = req.params;
    try {
      await Temperament.deleteById(id);
      res.send('Temperament deleted successfully');
    } catch (err) {
      console.error('Error deleting temperament by ID:', err);
      res.status(500).send('Error deleting temperament by ID');
    }
  }
};

module.exports = temperamentController;
