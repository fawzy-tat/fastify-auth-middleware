"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPlugin = void 0;
const jwtVerifyPlugin_1 = require("./plugins/jwtVerifyPlugin");
const fp = require("fastify-plugin");
// module.exports = fp(jwtVerifyPlugin);
exports.authPlugin = fp(jwtVerifyPlugin_1.jwtVerifyPlugin);
//# sourceMappingURL=index.js.map