import { jwtVerifyPlugin } from "./plugins/jwtVerifyPlugin";

const fp = require("fastify-plugin");

export const authPlugin = fp(jwtVerifyPlugin);
