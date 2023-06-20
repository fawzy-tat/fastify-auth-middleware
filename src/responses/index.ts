import { FastifyReply, FastifyRequest } from "fastify";

/**
 * Unauthorized responses.
 *
 * @param res
 */
export const unathorizedResponse = (req: FastifyRequest, res: FastifyReply) => {
  req.log.error({
    statusCode: 401,
    message: "Unauthorized",
    path: req.routerPath,
    method: req.routerMethod,
  });

  return res.code(401).send({
    statusCode: 401,
    error: "Unauthorized",
    message: "Unauthorized",
  });
};
