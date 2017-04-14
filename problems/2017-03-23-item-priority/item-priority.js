const R = require('ramda')

exports.default = function(items, categories) {
  const findMovieByCategory = category =>
    R.find(R.propEq('category', category))(items)

  const findPreferredCategory = R.find(findMovieByCategory)

  const forgetItWhateversOn = R.when(
    R.equals(undefined),
    R.always(R.head(items))
  )

  return R.compose(
    forgetItWhateversOn,
    findMovieByCategory,
    findPreferredCategory
  )(categories)
}
