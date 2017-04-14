const ratio = (a, b) => a / b
const stateDensity = state => ratio(state.population, state.totalArea)
const wetness = state => ratio(state.landArea, state.waterArea)
const difference = (a, b) => a - b
const prop = (prop, object) => object[prop]
const head = list => list[0]
const stateName = state => prop('state', state)
const reverse = list => [...list].reverse()
const getCapitalCity = state => prop('capitalCity', state)
const getLargestCity = state => prop('largestCity', state)
const isCapitalLargest = state => getCapitalCity(state) === getLargestCity(state)
const mapDifference = (a, b, func) => difference(func(a), func(b))

const sortByDensity = dataSet => {
  return dataSet.sort(
    (a, b) => mapDifference(a, b, stateDensity)
  )
}

const sortByWetness = dataSet => {
  return dataSet.sort(
    (a, b) => mapDifference(a, b, wetness)
  )
}

const stateFacts = function(dataSet) {
  const statesSortedByDensity = sortByDensity(dataSet)
  const mostDenseState = stateName(head(reverse(statesSortedByDensity)))
  const leastDenseState = stateName(head(statesSortedByDensity))

  const statesByWetness = sortByWetness(dataSet)


  console.info(`Capitals of each US state = ${dataSet.map(getCapitalCity)}`);
  console.info(`Most densily-populated state = ${mostDenseState}`);
  console.info(`Least densily-populated state = ${leastDenseState}`);
  console.info(`State(s) with one city as capital and largest population = ${dataSet.filter(isCapitalLargest).map(stateName)}`);
  console.info(`States by their land-area / water-area ratio = ${statesByWetness.map(stateName)}`);
  console.info(`[Insert your own question here] = [insert your own answer here]`);
};

module.exports = stateFacts;
