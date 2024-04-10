const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Breed = sequelize.define('Breed', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other columns as needed
});

module.exports = Breed;
