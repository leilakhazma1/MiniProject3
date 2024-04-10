const axios = require('axios');  
const { Breed } = require('../models/breedModel');  
const { Temperament } = require('../models/temperamentModel');  
let Models = require('../models/')

// Define the populateDatabase function to populate the database with breed data.
const populateDatabase = async () => {
  try {
    // Make a GET request to the Cat API to fetch breed data.
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const breeds = response.data;  // Store the response data in the breeds variable.

    // Loop through each breed in the breeds array.
    for (const breed of breeds) {
      const { temperament } = breed;  // Extract the temperament value from the breed object.

      // Check if a temperament with the same name exists in the database.
      const existingTemperament = await Temperament.findOne({ where: { name: temperament } });

      // If the temperament does not exist, create a new entry in the Temperament table.
      if (!existingTemperament) {
        await Temperament.create({ name: temperament });
      }

      // Create a new entry in the Breed table with the breed's details.
      await Breed.create({
        name: breed.name,
        description: breed.description,
        temperament: breed.temperament,
        life_span: breed.life_span,
        origin: breed.origin,
        wikipedia_url: breed.wikipedia_url
      });
    }

    console.log('Database populated successfully.');  // Log success message.
  } catch (error) {
    console.error('Error populating database:', error);  // Log any errors that occur.
  }
};

module.exports = { populateDatabase };  
