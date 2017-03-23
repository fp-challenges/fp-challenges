# item-priority

Implement a function `getMovie` that figures out which movie is preferred based on a pre-sorted list of preferred categories.

If no movie is found that matches the preferred categories, return the first movie from the provided list of movies.

*Example*:

    var categories = ['Action', 'Drama', 'Comedy', 'Musical', 'Documentary'];

    var items = [
    {
      name : 'The Hangover',
      category : 'Comedy'
    },
    {
      name : 'The Avengers',
      category : 'Action'
    },
    {
      name : 'Les Miserables',
      category : 'Musical'
    },
    {
      name : 'Food, Inc.',
      category : 'Documentary'
    }];

    getMovie(items, categories); // returns { name : 'The Avengers', category : 'Action' }

# Setup & Restrictions

Use functional programming only! 

The `ramda` and `lodash` libraries have been included in the package.json as recommended libraries that you can use.

Don't forget to do an `npm install` in this directory to get the packages installed.

# Test it out!

Run `npm test` and if it all passes, you won't see a terrible error!