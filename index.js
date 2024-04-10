const express = require('express');
const bodyParser = require('body-parser');
const breedRoutes = require('./routes/breedRoutes');
const temperamentRoutes = require('./routes/temperamentRoutes');

const app = express();

app.use(bodyParser.json());

// Routes for breeds
app.use('/breeds', breedRoutes);

// Routes for temperaments
app.use('/temperaments', temperamentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Connection successful!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
