# fastify-auth-middleware

## This Fastify plugin enables the utilization of RBAC-based JWT tokens as route middleware..

With this Package, you can include RBAC permissions in the JWT token's request header to grant access to specific routes within your fastify project.
By leveraging this feature, you can easily apply permissions to private routes.

- While this package is particularly well-suited for use with Auth0 API Authorization, it is not limited to it and can be utilized in other scenarios as well.

## Usage

fastify-auth-middleware offers two key functionalities:

1. Verifying the presence of a valid JWT token for a given route.
2. Safeguarding your routes by assigning permission scopes to each individual route.

## Auth0

If you'll use this package with Auth0, This package is specifically designed to address Auth0 API Authorization within fastify projects. For implementing Auth0 with Express.js, you can find the necessary resources and documentation [Here](https://auth0.com/docs/quickstart/backend/nodejs/01-authorization#configure-auth0-apis "Node (Express) API: Authorization").

## Usage

To use this package into your fastify project, follow these simple steps:

Install the package.
Register the plugin.

## Examples

Installing

```Javascript
import { authPlugin } from 'fastify-auth-middleware';
const server = fastify({
    // your fastify configs
});
server.register(authPlugin);
```

Or

```Javascript
const FastifyAuthMiddleware = require('fastify-auth-middleware');
const server = fastify({
    // your fastify configs
});
server.register(FastifyAuthMiddleware.authPlugin);
```

Protecting Routes

```Javascript
import { authPlugin } from 'fastify-auth-middleware';
const server = fastify({
    // your fastify configs
});
// Register the plugin
server.register(authPlugin);

// Public Route - This route doesn't need authentication
server.get('/about', async (req, res) => {
  return { message: 'About page' };
});

// A private route with no scope - This route requires authentication but no specific scope
server.get('/posts', { preHandler: [fastify.jwtVerify({})] } , async (req, res) => {
  return { message: 'That is fantastic! You now have the ability to access posts.'
});

// A scope protected route
server.get('/actions', { preHandler: [fastify.jwtVerify({ scopes: ['read:actions'] })] } , async (req, res) => {
  return { message: 'That is fantastic! You now have the ability to view and read actions.'
});

```

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!

## Known issues (Work in progress)

no reported issues so far!

## Like this project?

If you are feeling generous, buy me a coffee! - https://www.buymeacoffee.com/fawzytatdev
