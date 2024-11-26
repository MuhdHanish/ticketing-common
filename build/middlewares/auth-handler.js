"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../lib/utils");
;
;
const authHandler = (req, res, next) => {
    var _a;
    try {
        if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.token)) {
            throw new utils_1.CustomHTTPError("No authorization token found.", 401);
        }
        const { token } = req === null || req === void 0 ? void 0 : req.session;
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return next(new utils_1.CustomHTTPError("Invalid token, Access forbidden.", 403));
        }
        next(error);
    }
};
exports.authHandler = authHandler;
