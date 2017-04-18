const R = require('ramda');

exports.default = function(items, categories) {
  const findFirstListing = function(category) {
      return R.find(function (movie) {
          return R.propEq('category', category)(movie);
      })(items);
  };

  const findFirstUsedCategory = R.find(findFirstListing);

  const decideTheUndecided = function(movie) {
      return movie || items[0];
  };

  return R.compose(decideTheUndecided, findFirstListing, findFirstUsedCategory)(categories);
};