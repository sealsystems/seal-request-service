'use strict';

const assert = require('assertthat');
const proxyquire = require('proxyquire');

let resolveError;
let resolveErrorIndex;
const resolveResult = [];
const resolve = proxyquire('../lib/resolve', {
  '@sealsystems/seal-consul': {
    resolveService (serviceName, callback) {
      process.nextTick(() => {
        callback(resolveError[resolveErrorIndex++], resolveResult);
      });
    }
  }
});

suite('resolve', () => {
  setup((done) => {
    resolveErrorIndex = 0;
    resolveError = [];
    done();
  });

  test('is a function', (done) => {
    assert.that(resolve).is.ofType('function');
    done();
  });

  test('throws error if service name is missing', (done) => {
    assert.that(() => {
      resolve();
    }).is.throwing('Service name is missing.');
    done();
  });

  test('returns error if resolve service fails', (done) => {
    resolveError[0] = new Error('dabistnetdahoam');
    resolve('service', (err) => {
      assert.that(err).is.not.falsy();
      assert.that(err).is.equalTo(resolveError[0]);
      done();
    });
  });

  test('calls callback if resolve succeeds', (done) => {
    resolve('service', (err) => {
      assert.that(err).is.falsy();
      done();
    });
  });
});
