const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Temperament = sequelize.define('Temperament', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Temperament;
