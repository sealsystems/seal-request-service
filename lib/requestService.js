'use strict';

const getenv = require('getenv');
const log = require('seal-log').getLogger();
const retry = require('retry');

const connectService = require('seal-connect-service-cl');

const resolve = require('./resolve');

const requestServiceConsul = function (options, callback) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.service) {
    throw new Error('Service name is missing.');
  }
  if (!callback) {
    throw new Error('Callback is missing.');
  }

  resolve(options.service, (errResolve, hosts) => {
    if (errResolve) {
      return callback(errResolve);
    }

    if (!hosts.length) {
      log.error('No available instances for service found.', {
        service: options.service
      });
      return callback(new Error('No service instances available.'));
    }

    const operation = retry.operation({
      retries: hosts.length - 1,
      minTimeout: 0,
      maxTimeout: 0
    });
    let index = 0;

    operation.attempt(() => {
      const host = hosts[index++];

      connectService(options, host, (errConnect, client) => {
        if (operation.retry(errConnect)) {
          return;
        }
        if (errConnect) {
          callback(operation.mainError());
          return;
        }
        callback(null, client);
      });
    });
  });
};

const requestService = function (options, callback) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.service) {
    throw new Error('Service name is missing.');
  }
  if (!callback) {
    throw new Error('Callback is missing.');
  }

  const serviceDiscovery = getenv('SERVICE_DISCOVERY', 'consul');
  const servicePort = getenv.int('SERVICE_DISCOVERY_PORT', 3000);

  if (serviceDiscovery === 'consul') {
    return requestServiceConsul(options, callback);
  }

  options.port = servicePort;
  options.hostname = options.service;

  connectService(options, options.service, callback);
};

module.exports = requestService;
