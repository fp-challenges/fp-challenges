# item-priority

Implement a function `getMovie` that figures out which movie is preferred based on a pre-sorted list of preferred categories.

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