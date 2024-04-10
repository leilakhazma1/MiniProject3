const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Breed extends Model {}

Breed.init({
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
  sequelize,
  modelName: 'Breed',
  timestamps: false,
});

module.exports = Breed;
