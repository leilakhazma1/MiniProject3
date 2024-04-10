const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to fetch breeds from the Cat API
app.get('/breeds', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching breeds:', error);
    res.status(500).json({ error: 'Failed to fetch breeds' });
  }
});

// Route to fetch temperaments from the Cat API
app.get('/temperaments', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const temperaments = response.data.reduce((acc, breed) => {
      const breedTemperaments = breed.temperament.split(', ');
      breedTemperaments.forEach(temperament => {
        if (!acc.includes(temperament)) {
          acc.push(temperament);
        }
      });
      return acc;
    }, []);
    res.json(temperaments);
  } catch (error) {
    console.error('Error fetching temperaments:', error);
    res.status(500).json({ error: 'Failed to fetch temperaments' });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Connection successful!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

