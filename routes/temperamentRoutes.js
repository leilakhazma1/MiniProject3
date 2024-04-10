const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../db');

// GET all temperaments
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const temperaments = response.data.reduce((acc, breed) => {
      const breedTemperaments = breed.temperament.split(',').map(t => t.trim());
      return acc.concat(breedTemperaments);
    }, []);

    // Deduplicate the temperaments
    const uniqueTemperaments = [...new Set(temperaments)];

    // Store the temperaments in the database
    await Promise.all(uniqueTemperaments.map(async (temperament) => {
      await db.query('INSERT INTO temperaments (name) VALUES (?)', [temperament]);
    }));

    res.json(uniqueTemperaments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch temperaments');
  }
});

// GET a single temperament by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [temperament] = await db.query('SELECT name FROM temperaments WHERE id = ?', [id]);
    if (!temperament) {
      res.status(404).send('Temperament not found');
      return;
    }
    res.json(temperament);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch temperament');
  }
});

module.exports = router;
