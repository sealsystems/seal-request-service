'use strict';

const consul = require('@sealsystems/seal-consul');

const log = require('seal-log').getLogger();

const resolve = function (service, callback) {
  if (!service) {
    throw new Error('Service name is missing.');
  }

  consul.resolveService(service, (err, hosts) => {
    if (err) {
      log.error('Error resolving requested service.', {
        service,
        err
      });
    }
    callback(err, hosts);
  });
};

module.exports = resolve;
