const getYearDuration = require('./getYearDuration').default;

/**
 * Return a list of people with their ages.
 *
 *  This function isn't so pure. 
 *
 *  Refactor it so that:
 *    - It does not modify or depend on external state.
 *    - It has consistent return values given the same input values.
 *
 *  Hint: If you get stuck, try this out at a different time and perhaps 
 *        you'll get the hint. 
 */
exports.default = function(people) {
  people.forEach(person => {
    person.age = getYearDuration(Date.now() - new Date(person.dateOfBirth))
  });

  return people;
};
