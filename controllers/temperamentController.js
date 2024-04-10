const Temperament = require('../models/Temperament');

// Create a new temperament
exports.createTemperament = async (req, res) => {
  try {
    const { name } = req.body;
    const temperament = await Temperament.create({ name });
    res.json(temperament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all temperaments
exports.getAllTemperaments = async (req, res) => {
  try {
    const temperaments = await Temperament.findAll();
    res.json(temperaments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get temperament by ID
exports.getTemperamentById = async (req, res) => {
  try {
    const { id } = req.params;
    const temperament = await Temperament.findByPk(id);
    if (!temperament) {
      res.status(404).json({ message: 'Temperament not found' });
      return;
    }
    res.json(temperament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a temperament
exports.updateTemperament = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const temperament = await Temperament.findByPk(id);
    if (!temperament) {
      res.status(404).json({ message: 'Temperament not found' });
      return;
    }
    temperament.name = name;
    await temperament.save();
    res.json(temperament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a temperament
exports.deleteTemperament = async (req, res) => {
  try {
    const { id } = req.params;
    const temperament = await Temperament.findByPk(id);
    if (!temperament) {
      res.status(404).json({ message: 'Temperament not found' });
      return;
    }
    await temperament.destroy();
    res.json({ message: 'Temperament deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
