const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Temperament = sequelize.define('Temperament', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false, // Disable timestamps
});

module.exports = Temperament;