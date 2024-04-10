'use strict'

const { DataTypes, Model } = require('sequelize');
const db = require('../db');

const sequelizeInstance = db.Sequelize;

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
  sequelize: sequelizeInstance,
  modelName: 'breeds',
  timestamps: true,
  freezeTableName: true

});

module.exports = Breed;
