'use strict';

const assert = require('assertthat');
const proxyquire = require('proxyquire');

let connectError;
let connectedServices;
let resolveError;
let resolvedServices;
const requestService = proxyquire('../lib/requestService', {
  'seal-connect-service' (options, host, callback) {
    connectedServices.push(host);
    callback(connectError, `This is a client.`);
  },
  './resolve' (service, callback) {
    callback(resolveError, resolvedServices);
  }
});

suite('requestService', () => {
  setup(() => {
    connectError = null;
    connectedServices = [];
    resolveError = null;
    resolvedServices = [];
  });

  test('is a function', (done) => {
    assert.that(requestService).is.ofType('function');
    done();
  });

  test('throws an error if options is missing.', (done) => {
    assert.that(() => {
      requestService();
    }).is.throwing('Options are missing.');
    done();
  });

  test('throws an error if service name is missing.', (done) => {
    assert.that(() => {
      requestService({});
    }).is.throwing('Service name is missing.');
    done();
  });

  test('throws an error if callback is missing.', (done) => {
    assert.that(() => {
      requestService({
        service: 'test service',
        path: 'test/path'
      });
    }).is.throwing('Callback is missing.');
    done();
  });

  test('returns an error if resolve failed.', (done) => {
    resolveError = new Error('Best Error Ever');

    requestService({
      service: 'test service',
      path: '/test/path'
    }, (err) => {
      assert.that(err).is.not.falsy();
      assert.that(err.message).is.containing('Best Error Ever');
      done();
    });
  });

  test('returns an error if empty list of services is given.', (done) => {
    requestService({
      service: 'test service',
      path: 'test/path'
    }, (err) => {
      assert.that(err).is.not.falsy();
      assert.that(err.message).is.equalTo('No service instances available.');
      done();
    });
  });

  test('returns an error if connecting each given service failed.', (done) => {
    resolvedServices = [
      'service1',
      'service2'
    ];

    connectError = new Error('foo');

    requestService({
      service: 'test service',
      path: '/test/path'
    }, (err) => {
      assert.that(err).is.not.falsy();
      assert.that(err.message).is.containing('foo');
      assert.that(connectedServices).is.equalTo(resolvedServices);
      done();
    });
  });

  test('returns connected client on success.', (done) => {
    resolvedServices = [
      'service1',
      'service2'
    ];

    requestService({
      service: 'test service',
      path: '/test/path'
    }, (err, client) => {
      assert.that(err).is.null();
      assert.that(connectedServices.length).is.equalTo(1);
      assert.that(connectedServices[0]).is.equalTo(resolvedServices[0]);
      assert.that(client).is.equalTo('This is a client.');
      done();
    });
  });
});
