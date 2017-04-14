const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getOldest = require('../lib/getOldest').default;

const getEmployees = () => [
  {
    name : 'Daniel',
    dateOfBirth : '1984-01-12'
  },
  {
    name : 'Jack',
    dateOfBirth : '1946-04-06'
  },
  {
    name : 'Jane',
    dateOfBirth : '1989-08-30'
  }
];

describe('getOldest', () => {
  it('should return the oldest employee', () => {
    const employees = getEmployees();

    expect(getOldest(employees)).to.deep.equal({
      name : 'Jack',
      dateOfBirth : '1946-04-06'
    });
  });

  it('should not mutate the input employees parameter', () => {
    const employees = getEmployees();
    getOldest(employees);

    expect(employees).to.deep.equal(getEmployees());
  });
});
