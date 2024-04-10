const breedModel = require('../models/breedModel');

// Controller function to create a new breed
async function createBreed(req, res) {
  const breedData = req.body; // Get the breed data from the request body
  try {
    // Call the model function to create a new breed in the database
    const breedId = await breedModel.createBreed(breedData);
    // Return a success response with the ID of the newly created breed
    res.status(201).json({ id: breedId, message: 'Breed created successfully' });
  } catch (err) {
    // Return an error response if the creation fails
    res.status(500).json({ error: 'Failed to create breed' });
  }
}

// Controller function to get all breeds
async function getAllBreeds(req, res) {
  try {
    // Call the model function to get all breeds from the database
    const breeds = await breedModel.getAllBreeds();
    // Return a success response with the list of breeds
    res.status(200).json(breeds);
  } catch (err) {
    // Return an error response if fetching breeds fails
    res.status(500).json({ error: 'Failed to fetch breeds' });
  }
}

// Controller function to get a breed by ID
async function getBreedById(req, res) {
  const id = req.params.id; // Get the breed ID from the request parameters
  try {
    // Call the model function to get the breed by ID from the database
    const breed = await breedModel.getBreedById(id);
    // Return a success response with the breed data
    res.status(200).json(breed);
  } catch (err) {
    // Return an error response if the breed is not found
    res.status(404).json({ error: 'Breed not found' });
  }
}

// Controller function to update a breed
async function updateBreed(req, res) {
  const id = req.params.id; // Get the breed ID from the request parameters
  const breedData = req.body; // Get the updated breed data from the request body
  try {
    // Call the model function to update the breed in the database
    await breedModel.updateBreed(id, breedData);
    // Return a success response
    res.status(200).json({ message: 'Breed updated successfully' });
  } catch (err) {
    // Return an error response if updating the breed fails
    res.status(500).json({ error: 'Failed to update breed' });
  }
}

// Controller function to delete a breed
async function deleteBreed(req, res) {
  const id = req.params.id; // Get the breed ID from the request parameters
  try {
    // Call the model function to delete the breed from the database
    await breedModel.deleteBreed(id);
    // Return a success response
    res.status(200).json({ message: 'Breed deleted successfully' });
  } catch (err) {
    // Return an error response if deleting the breed fails
    res.status(500).json({ error: 'Failed to delete breed' });
  }
}

// Export the controller functions
module.exports = {
  createBreed,
  getAllBreeds,
  getBreedById,
  updateBreed,
  deleteBreed
};
