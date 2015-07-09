'use strict';

/* deps: mocha */
var should = require('should');
var startsWithAny = require('./');

describe('startsWithAny', function () {
  it('should return true if a string starts with the given string:', function () {
    startsWithAny('abc', 'a').should.equal(true);
    startsWithAny('xyz', 'x').should.equal(true);
  });

  it('should return true if an array starts with the given string:', function () {
    startsWithAny(['a', 'b', 'c'], 'a').should.equal(true);
    startsWithAny(['x', 'y', 'z'], 'x').should.equal(true);
  });

  it('should return true if a string starts with one of the given values:', function () {
    startsWithAny('abc', ['a', 'z', 'c']).should.equal(true);
    startsWithAny('xyz', ['x', 'y', 'z']).should.equal(true);
    startsWithAny('foo bar baz', ['slls', 'a', 'foo']).should.equal(true);
  });

  it('should return true if an array starts with any of the given values:', function () {
    startsWithAny(['a', 'b', 'c'], ['a', 'g', 'foo']).should.equal(true);
    startsWithAny(['x', 'y', 'z'], ['alpha', 'delta', 'x']).should.equal(true);
  });

  it('should return false if a string does not end with the given string:', function () {
    startsWithAny('xyz', 'a').should.equal(false);
    startsWithAny('abc', 'z').should.equal(false);
  });

  it('should return false if a string starts with none of the given values:', function () {
    startsWithAny('abc', ['x', 'y', 'z']).should.equal(false);
    startsWithAny('xyz', ['a', 'b', 'c']).should.equal(false);
    startsWithAny('foo bar baz', ['slls', 'a', 'baz']).should.equal(false);
  });

  it('should throw an error when the first arg is invalid:', function () {
    (function () {
      startsWithAny();
    }).should.throw('startsWithAny expects the first argument to be a string or array.');

    (function () {
      startsWithAny({});
    }).should.throw('startsWithAny expects the first argument to be a string or array.');

    (function () {
      startsWithAny(null);
    }).should.throw('startsWithAny expects the first argument to be a string or array.');
  });
});
