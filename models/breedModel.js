const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Breed = sequelize.define('Breed', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  temperament: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  life_span: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wikipedia_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Disable timestamps
});

module.exports = Breed;