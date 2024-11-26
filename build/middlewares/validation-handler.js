"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = void 0;
const express_validator_1 = require("express-validator");
const utils_1 = require("../lib/utils");
const validationHandler = (validationRules) => {
    return [
        ...validationRules,
        (req, res, next) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                throw new utils_1.CustomHTTPError(errors.array()[0].msg, 400);
            }
            next();
        },
    ];
};
exports.validationHandler = validationHandler;
