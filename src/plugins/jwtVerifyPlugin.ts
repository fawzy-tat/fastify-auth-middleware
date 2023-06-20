import jwt_decode from "jwt-decode";
import {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from "fastify";
import { unathorizedResponse } from "../responses";

export const jwtVerifyPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.decorate("jwtVerify", function (options?: { scopes?: string[] }) {
    return async function (
      request: FastifyRequest,
      reply: FastifyReply,
      done: HookHandlerDoneFunction
    ) {
      if (request.headers.authorization) {
        const auth = request.headers.authorization;
        const token = auth.split(" ")[1];
        const decoded: any = jwt_decode(token);
        if (decoded) {
          console.log("decoded", decoded);
          if (options?.scopes?.length) {
            // access scopes here
            console.log("scope", options?.scopes);
            // if (!decoded.permissions.includes(options?.scope[0])) {
            if (
              !options?.scopes.some((scope) =>
                scope.includes(decoded.permissions)
              )
            ) {
              return unathorizedResponse(request, reply);
            }
          }
          done();
        }
      } else {
        return unathorizedResponse(request, reply);
      }
    };
  });
};
