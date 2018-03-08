'use strict';

const log = require('seal-log').getLogger();
const retry = require('retry');

const connectService = require('seal-connect-service');

const resolve = require('./resolve');

const requestService = async function (options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.service) {
    throw new Error('Service name is missing.');
  }

  const { service } = options;

  const hosts = await resolve(service);

  if (!hosts.length) {
    log.error('No available instances for service found.', { service });

    throw new Error('No service instances available.');
  }

  const operation = retry.operation({
    retries: hosts.length - 1,
    minTimeout: 0,
    maxTimeout: 0
  });

  let index = 0;

  const client = await new Promise((resolvePromise, reject) => {
    operation.attempt(() => {
      const host = hosts[index++];

      connectService(options, host, (errConnect, serviceClient) => {
        if (operation.retry(errConnect)) {
          return;
        }
        if (errConnect) {
          return reject(operation.mainError());
        }

        resolvePromise(serviceClient);
      });
    });
  });

  return client;
};

module.exports = requestService;
