'use strict';

const assert = require('assertthat'),
  proxyquire = require('proxyquire');

let resolveError;
const resolveResult = [];
const resolve = proxyquire('../lib/resolve', {
  '@sealsystems/consul': {
    async resolveService() {
      if (resolveError) {
        throw resolveError;
      }

      return resolveResult;
    }
  }
});

suite('resolve', () => {
  setup(async () => {
    resolveError = null;
  });

  test('is a function', async () => {
    assert.that(resolve).is.ofType('function');
  });

  test('throws an error if service name is missing', async () => {
    await assert
      .that(async () => {
        await resolve();
      })
      .is.throwingAsync('Service name is missing.');
  });

  test('throws an error if resolve service fails', async () => {
    resolveError = new Error('dabistnetdahoam');

    await assert
      .that(async () => {
        await resolve('service');
      })
      .is.throwingAsync('dabistnetdahoam');
  });

  test('returns result if resolve succeeds', async () => {
    const result = await resolve('service');

    assert.that(result).is.equalTo([]);
  });
});
