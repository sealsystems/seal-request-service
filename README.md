# seal-request-service

Makes a request to a service, using consul for discovery and lookup.

## Installation

```bash
$ npm install seal-request-service
```

## Quick start

First you need to add a reference to seal-request-service within your application.

```javascript
var requestService = require('seal-request-service');
```

**Please note:** A connection to consul must already exist before you can use the module.

To create a HTTP/HTTPS request to an instance of a service use:

```javascript
requestService({ service: 'myService' }, (err, req) => {
  if (!err) {
    throw new Error('An error occurred while connecting to the service.');
  }

  req.on('connect', () => {
    console.log('Connected to service!');
  });

  req.write('Hello service!');
  req.end();
});
```

The first parameter is an `options` object that can contain the following properties:

| property  | type            | description                        |
|-----------|-----------------|------------------------------------|
| service   | required string | Name of the service to access      |
| headers   | optional object | Additional HTTP/HTTPS headers      |
| method    | optional string | HTTP/HTTPS method, default `POST`  |
| path      | optional string | URL-path to access, default `/`    |

Here is an example of a more complete `options` object:

```javascript
var options = {
  headers: {
    'content-type': 'application/json'
  },
  method: 'POST',
  path: '/job',
  service: 'myService'
};
```

The `callback` function given as the second parameter will be called when a connection to a instance of the service could be established. In this case, the `err` parameter is `null` and the `req` parameter contains a [http.ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest) object for further use. Otherwise, the `err` parameter contains an `Error` object with further details about the problem.

## HTTP and HTTPS

The protocol used for a connection depends on the target (the service resides in the local or a remote host) and the value of the environment variable TLS_UNPROTECTED. The TLS certificates provided by `seal-tlscert` will be used for HTTPS connections. It is not possible to override the chosen protocol.

Used protocol:

| TLS_UNPROTECTED | local service | remote service |
| --------------- | ------------- | -------------- |
| 'world'         | HTTP          | HTTP           |
| 'loopback'      | HTTP          | HTTPS          |
| 'none'          | HTTPS         | HTTPS          |

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```bash
$ bot
```
