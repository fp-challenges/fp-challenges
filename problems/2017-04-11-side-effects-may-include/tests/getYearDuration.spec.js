const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getYearDuration = require('../lib/getYearDuration').default;

/**
 * There's nothing more we need to do here, although perhaps additional test cases will boost confidence.
 */
describe('getYearDuration', () => {
  it('should figure out how long a time in ms is in rounded down years', () => {
    expect(getYearDuration(9.46728E+11)).to.equal(30);
  });
});
