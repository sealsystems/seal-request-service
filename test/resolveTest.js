'use strict';

const assert = require('assertthat');

let resolveError;
const resolveResult = [];
const consul = {
  async resolveService() {
    if (resolveError) {
      throw resolveError;
    }

    return resolveResult;
  }
};

const resolve = require('../lib/resolve');

suite('resolve', () => {
  setup(async () => {
    resolveError = null;
  });

  test('is a function', async () => {
    assert.that(resolve).is.ofType('function');
  });

  test('throws an error if consul is missing', async () => {
    await assert
      .that(async () => {
        await resolve();
      })
      .is.throwingAsync('Consul is missing.');
  });

  test('throws an error if service name is missing', async () => {
    await assert
      .that(async () => {
        await resolve(consul);
      })
      .is.throwingAsync('Service name is missing.');
  });

  test('throws an error if resolve service fails', async () => {
    resolveError = new Error('dabistnetdahoam');

    await assert
      .that(async () => {
        await resolve(consul, 'service');
      })
      .is.throwingAsync('dabistnetdahoam');
  });

  test('returns result if resolve succeeds', async () => {
    const result = await resolve(consul, 'service');

    assert.that(result).is.equalTo([]);
  });
});
