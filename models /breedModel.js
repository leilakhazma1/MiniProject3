const db = require('../db');

// Model function to create a new breed
async function createBreed(breedData) {
  try {
    // Execute an SQL query to insert a new breed into the database
    const result = await db.query('INSERT INTO breeds SET ?', breedData);
    // Return the ID of the newly created breed
    return result.insertId;
  } catch (err) {
    // Throw an error if creating the breed fails
    console.error('Error creating breed: ', err);
    throw err;
  }
}

// Model function to get all breeds
async function getAllBreeds() {
  try {
    // Execute an SQL query to get all breeds from the database
    const breeds = await db.query('SELECT * FROM breeds');
    // Return the list of breeds
    return breeds;
  } catch (err) {
    // Throw an error if fetching breeds fails
    console.error('Error getting breeds: ', err);
    throw err;
  }
}

// Model function to get a breed by ID
async function getBreedById(id) {
  try {
    // Execute an SQL query to get a breed by ID from the database
    const breed = await db.query('SELECT * FROM breeds WHERE id = ?', [id]);
    // Throw an error if the breed is not found
    if (breed.length === 0) {
      throw new Error('Breed not found');
    }
    // Return the breed data
    return breed[0];
  } catch (err) {
    // Throw an error if fetching the breed fails
    console.error('Error getting breed: ', err);
    throw err;
  }
}

// Model function to update a breed
async function updateBreed(id, breedData) {
  try {
    // Execute an SQL query to update a breed in the database
    await db.query('UPDATE breeds SET ? WHERE id = ?', [breedData, id]);
  } catch (err) {
    // Throw an error if updating the breed fails
    console.error('Error updating breed: ', err);
    throw err;
  }
}

// Model function to delete a breed
async function deleteBreed(id) {
  try {
    // Execute an SQL query to delete a breed from the database
    await db.query('DELETE FROM breeds WHERE id = ?', [id]);
  } catch (err) {
    // Throw an error if deleting the breed fails
    console.error('Error deleting breed: ', err);
    throw err;
  }
}

// Export the model functions
module.exports = {
  createBreed,
  getAllBreeds,
  getBreedById,
  updateBreed,
  deleteBreed
};
