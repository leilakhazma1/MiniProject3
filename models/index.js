'use strict';

const Breed = require('./breedModel');
const Temperament = require('./temperamentModel');

async function init() {
  await Breed.sync();
  await Temperament.sync();
}

init();

module.exports = {
  Breed,
  Temperament
};
