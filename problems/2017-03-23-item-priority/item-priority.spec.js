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

expect(sut(items, ['Action', 'Drama', 'Comedy', 'Musical', 'Documentary'])).to.deep.equal({
  name : 'The Avengers',
  category : 'Action'
}, 'Avengers');

expect(sut(items, ['Drama', 'Action', 'Comedy', 'Musical', 'Documentary'])).to.deep.equal({
  name : 'Good Will Hunting',
  category : 'Drama'
}, 'GWH');

expect(sut(items, ['Documentary', 'Drama', 'Action', 'Comedy', 'Musical'])).to.deep.equal({
  name : 'Food, Inc.',
  category : 'Documentary'
}, 'Food Inc.');

expect(sut(items, ['Romantic Comedy', 'Musical', 'Action', 'Drama', 'Comedy', 'Documentary'])).to.deep.equal({
  name : 'Les Miserables',
  category : 'Musical'
}, 'Les Miserables');

expect(sut(items2, categories)).to.deep.equal({
  name : 'The Human Centipede',
  category : 'Cringe Horror'
}, 'The Human Centipede (yuck)');

expect(sut(items2, [])).to.deep.equal({
  name : 'The Human Centipede',
  category : 'Cringe Horror'
}, 'The Human Centipede (yuck)');

expect(sut([], categories)).to.equal(undefined, 'Cannot select a movie when none given');
