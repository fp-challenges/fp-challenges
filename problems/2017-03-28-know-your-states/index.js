const fs = require('fs');
const parseCsv = require('csv-parse/lib/sync');

const testModule = require('./state-facts.js');
const dataSet = fs.readFileSync('./USA-states.csv', 'utf-8');

const numberify = value => parseInt(value.replace(/\(.*\)/, '').replace(',', '').trim());
const toStateObj = ([state, abbrev, capitalCity, largestCity, _, population, totalArea, landArea, waterArea]) => ({
  state,
  capitalCity,
  largestCity,
  population: numberify(population),
  totalArea: numberify(totalArea),
  landArea: numberify(landArea),
  waterArea: numberify(waterArea)
});

testModule(parseCsv(dataSet).map(toStateObj));