const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/breeds', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
