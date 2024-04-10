const express = require('express');
const bodyParser = require('body-parser');
const breedRoutes = require('./routes/breedRoutes');

const app = express();

app.use(bodyParser.json());

// add all the routes here 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

