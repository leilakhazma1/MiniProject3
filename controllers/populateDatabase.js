const axios = require('axios');
const { Breed } = require('../models/breedModel');
const { Temperament } = require('../models/temperamentModel');



const populateDatabase = async () => {
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
  } catch (error) {
    console.error('Error populating database:', error);
  }
};

module.exports = {populateDatabase};  


