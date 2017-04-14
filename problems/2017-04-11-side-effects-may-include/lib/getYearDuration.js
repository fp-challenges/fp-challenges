/**
 * Returns the duration of years (rounded down) of the input time (ms) 
 *
 * This function is pure. No external state is used, and results are always consistent.
 */
exports.default = function(timeInMillis) {
  return Math.floor(timeInMillis / 1000 / 60 / 60 / 24 / 365);
};
