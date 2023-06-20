"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerifyPlugin = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const responses_1 = require("../responses");
const jwtVerifyPlugin = (fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.decorate("jwtVerify", function (options) {
        return function (request, reply, done) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if (request.headers.authorization) {
                    const auth = request.headers.authorization;
                    const token = auth.split(" ")[1];
                    const decoded = (0, jwt_decode_1.default)(token);
                    if (decoded) {
                        console.log("decoded", decoded);
                        if ((_a = options === null || options === void 0 ? void 0 : options.scopes) === null || _a === void 0 ? void 0 : _a.length) {
                            // access scopes here
                            console.log("scope", options === null || options === void 0 ? void 0 : options.scopes);
                            // if (!decoded.permissions.includes(options?.scope[0])) {
                            if (!(options === null || options === void 0 ? void 0 : options.scopes.some((scope) => scope.includes(decoded.permissions)))) {
                                return (0, responses_1.unathorizedResponse)(request, reply);
                            }
                        }
                        done();
                    }
                }
                else {
                    return (0, responses_1.unathorizedResponse)(request, reply);
                }
            });
        };
    });
});
exports.jwtVerifyPlugin = jwtVerifyPlugin;
//# sourceMappingURL=jwtVerifyPlugin.js.map