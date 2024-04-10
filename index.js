const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();

app.use(bodyParser.json());

// GET all breeds
app.get('/breeds', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM breeds');
    res.json(rows);
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).send('Error querying database');
  }
});

// POST a new breed
app.post('/breeds', async (req, res) => {
  const { name, origin, temperament } = req.body;
  try {
    await pool.query('INSERT INTO breeds (name, origin, temperament) VALUES (?, ?, ?)', [name, origin, temperament]);
    res.status(201).send('Breed added successfully');
  } catch (err) {
    console.error('Error inserting into database:', err);
    res.status(500).send('Error inserting into database');
  }
});

// PUT update a breed by ID
app.put('/breeds/:id', async (req, res) => {
  const { name, origin, temperament } = req.body;
  const breedId = req.params.id;
  try {
    await pool.query('UPDATE breeds SET name = ?, origin = ?, temperament = ? WHERE id = ?', [name, origin, temperament, breedId]);
    res.send('Breed updated successfully');
  } catch (err) {
    console.error('Error updating database:', err);
    res.status(500).send('Error updating database');
  }
});

// DELETE a breed by ID
app.delete('/breeds/:id', async (req, res) => {
  const breedId = req.params.id;
  try {
    await pool.query('DELETE FROM breeds WHERE id = ?', [breedId]);
    res.send('Breed deleted successfully');
  } catch (err) {
    console.error('Error deleting from database:', err);
    res.status(500).send('Error deleting from database');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
