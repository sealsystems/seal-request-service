'use strict';

const consul = require('@sealsystems/consul');

const log = require('seal-log').getLogger();

const resolve = async function (service) {
  if (!service) {
    throw new Error('Service name is missing.');
  }

  let hosts;

  try {
    hosts = await consul.resolveService(service);
  } catch (ex) {
    log.error('Error resolving requested service.', {
      service,
      err: ex
    });

    throw ex;
  }

  return hosts;
};

module.exports = resolve;
