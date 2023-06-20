"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unathorizedResponse = void 0;
/**
 * Unauthorized responses.
 *
 * @param res
 */
const unathorizedResponse = (req, res) => {
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
exports.unathorizedResponse = unathorizedResponse;
//# sourceMappingURL=index.js.map