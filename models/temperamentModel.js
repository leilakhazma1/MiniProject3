'use strict'

const { DataTypes, Model } = require("sequelize");
const db = require('../db');

const sequelizeInstance = db.Sequelize;
class Temperament extends Model {}

Temperament.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
  sequelize: sequelizeInstance,
  modelName: 'temperaments',
  timestamps: true,
  freezeTableName: true
  }
);

module.exports = Temperament;
