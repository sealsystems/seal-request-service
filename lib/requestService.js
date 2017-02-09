'use strict';

const log = require('seal-log').getLogger();
const retry = require('retry');

const connectService = require('seal-connect-service');

const resolve = require('./resolve');

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

module.exports = requestService;
