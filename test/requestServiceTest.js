'use strict';

const assert = require('assertthat'),
      proxyquire = require('proxyquire');

let connectError;
let connectedServices;
let resolveError;
let resolvedServices;

const requestService = proxyquire('../lib/requestService', {
  async '@sealsystems/connect-service' (options, host) {
    if (connectError) {
      throw connectError;
    }

    connectedServices.push(host);

    return `This is a client.`;
  },
  async './resolve' () {
    if (resolveError) {
      throw resolveError;
    }

    return resolvedServices;
  }
});

suite('requestService', () => {
  setup(() => {
    connectError = null;
    connectedServices = [];
    resolveError = null;
    resolvedServices = [];
  });

  test('is a function', async () => {
    assert.that(requestService).is.ofType('function');
  });

  test('throws an error if options is missing.', async () => {
    await assert.that(async () => {
      await requestService();
    }).is.throwingAsync('Options are missing.');
  });

  test('throws an error if service name is missing.', async () => {
    await assert.that(async () => {
      await requestService({});
    }).is.throwingAsync('Service name is missing.');
  });

  test('throws an error if resolve failed.', async () => {
    resolveError = new Error('Best Error Ever');

    await assert.that(async () => {
      await requestService({
        service: 'test service',
        path: '/test/path'
      });
    }).is.throwingAsync('Best Error Ever');
  });

  test('throws an error if empty list of services is given.', async () => {
    await assert.that(async () => {
      await requestService({
        service: 'test service',
        path: '/test/path'
      });
    }).is.throwingAsync('No service instances available.');
  });

  test('throws an error if connecting each given service failed.', async () => {
    resolvedServices = [
      'service1',
      'service2'
    ];

    connectError = new Error('foo');

    await assert.that(async () => {
      await requestService({
        service: 'test service',
        path: '/test/path'
      });
    }).is.throwingAsync('foo');
  });

  test('returns connected client on success.', async () => {
    resolvedServices = [
      'service1',
      'service2'
    ];

    const client = await requestService({
      service: 'test service',
      path: '/test/path'
    });

    assert.that(connectedServices.length).is.equalTo(1);
    assert.that(connectedServices[0]).is.equalTo(resolvedServices[0]);
    assert.that(client).is.equalTo('This is a client.');
  });
});
