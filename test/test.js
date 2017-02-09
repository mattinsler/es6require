const es6require = require('..');
const assert = require('assert');

describe('fixture', () => {
  it('should output the fixture\'s exports', () => {

    // This fails when you simply run mocha (i.e. from the root)
    assert.equal('a', es6require('./fixture'));
    // Error: Cannot find module '...root\es6require\fixture'
    // It tries to load './fixture' from root instead of './test'

  });
});
