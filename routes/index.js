const express = require('express');
const router = express.Router();
const { Breed } = require('../models/breedModel');
const { Temperament } = require('../models/temperamentModel');
const axios = require('axios');

router.post('/populate', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const breeds = response.data;

    for (const breed of breeds) {
      const { temperament } = breed;
      const existingTemperament = await Temperament.findOne({ where: { name: temperament } });

      if (!existingTemperament) {
        await Temperament.create({ name: temperament });
      }

      await Breed.create({
        name: breed.name,
        description: breed.description,
        temperament: breed.temperament,
        life_span: breed.life_span,
        origin: breed.origin,
        wikipedia_url: breed.wikipedia_url
      });
    }

    console.log('Database populated successfully.');
    res.status(200).json({ message: 'Database populated successfully' });
  } catch (error) {
    console.error('Error populating database:', error);
    res.status(500).json({ message: 'Failed to populate database' });
  }
});

module.exports = router;
