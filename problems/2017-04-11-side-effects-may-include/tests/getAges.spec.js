const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getAges = require('../lib/getAges').default;

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

describe('getAges', () => {
  before(() => {
    const date = new Date('2016-04-11');
    this.clock = sinon.useFakeTimers(date);
  })

  after(() => {
    this.clock.restore();
  });

  it('should return a list of employees with their ages', () => {
    const employees = getEmployees();

    const employeesWithAges = [
      {
        name : 'Daniel',
        dateOfBirth : '1984-01-12',
        age : 32
      },
      {
        name : 'Jack',
        dateOfBirth : '1946-04-06',
        age : 70
      },
      {
        name : 'Jane',
        dateOfBirth : '1989-08-30',
        age : 26
      }
    ]

    expect(getAges(employees)).to.deep.equal(employeesWithAges);
  });

  it('should not mutate the input employees parameter', () => {
    const employees = getEmployees();
    getAges(employees);
    expect(employees).to.deep.equal(getEmployees());
  });
});
