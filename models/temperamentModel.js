const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

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
    sequelize,
    modelName: "Temperament",
    timestamps: false,
  }
);

module.exports = Temperament;
