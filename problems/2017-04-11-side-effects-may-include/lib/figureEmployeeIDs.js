/**
 * Return a list of employees with their employee ids.
 *
 * Hey, is this pure?
 */
exports.default = function(employees) {
  return employees.map((person, index) => Object.assign({}, person, { id : `emp-${index+1}-${Math.random()}` }));
};
