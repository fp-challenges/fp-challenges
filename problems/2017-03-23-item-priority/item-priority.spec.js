const chai = require('chai');
const expect = chai.expect;

const sut = require('./item-priority').default;

const categories = ['Action', 'Drama', 'Comedy', 'Musical', 'Documentary'];

const items = [
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
},
{
  name : 'Good Will Hunting',
  category : 'Drama'
}];

const items2 = [
  {
    name : 'The Human Centipede',
    category : 'Cringe Horror'
  },
  {
    name : 'Sharknado',
    category : 'Low Budget Action'
  },
  {
    name : 'The Blair Witch Project',
    category : 'Low Budget Horror'
  }
]

describe('The item-priority test', function() {

  it('should return an action movie if an action movie is provided and action is most preferred', function() {
    expect(sut(items, ['Action', 'Drama', 'Comedy', 'Musical', 'Documentary'])).to.deep.equal({
      name : 'The Avengers',
      category : 'Action'
    }, 'Avengers');
  });
  
  it('should return a drama movie if a drama movie is provided and drama is most preferred', function() {
    expect(sut(items, ['Drama', 'Action', 'Comedy', 'Musical', 'Documentary'])).to.deep.equal({
      name : 'Good Will Hunting',
      category : 'Drama'
    }, 'GWH');
  });

  it('should return a documentary movie if a documentary movie is provided and documentary is most preferred', function() {
    expect(sut(items, ['Documentary', 'Drama', 'Action', 'Comedy', 'Musical'])).to.deep.equal({
      name : 'Food, Inc.',
      category : 'Documentary'
    }, 'Food Inc.');
  });

  it('should return a musical movie if a musical movie is provided and the most preferred movie category is not matched,\
    but musical is more preferred than other available categories', function() {
    expect(sut(items, ['Romantic Comedy', 'Musical', 'Action', 'Drama', 'Comedy', 'Documentary'])).to.deep.equal({
      name : 'Les Miserables',
      category : 'Musical'
    }, 'Les Miserables');
  });

  it('should return the first movie provided if no preferred movie categories are matched', function() {
    expect(sut(items2, categories)).to.deep.equal({
      name : 'The Human Centipede',
      category : 'Cringe Horror'
    }, 'The Human Centipede (yuck)');
  });

  it('should return the first movie provided if no categories are provided', function() {
    expect(sut(items2, [])).to.deep.equal({
      name : 'The Human Centipede',
      category : 'Cringe Horror'
    }, 'The Human Centipede (yuck)');
  });

  it('should return undefined if no movies are provided', function() {
    expect(sut([], categories)).to.equal(undefined, 'Cannot select a movie when none given');
  });

});