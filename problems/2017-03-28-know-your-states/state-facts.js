const getCapitals = dataSet => {
  return dataSet.map(item => `${item.state}:${item.capitalCity}`);
};

const getPopulationDensity = dataSet => {
  return dataSet.map(item => {
    return {
      item.state,
      density : item.population / item.totalArea
    };
  }))
}


const stateFacts = function(dataSet) {
  console.info('Capitals of each US state = ', getCapitals(dataSet));
  console.info('Most densily-populated state = ');
  console.info('Least densily-populated state = ');
  console.info('State(s) with one city as capital and largest population = ');
  console.info('States by their land-area / water-area ratio = ');
  console.info('[Insert your own question here] = [insert your own answer here]');
};

module.exports = stateFacts;