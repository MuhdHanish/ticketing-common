"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailPassword = void 0;
const express_validator_1 = require("express-validator");
exports.validateEmailPassword = [
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be between 8 and 20 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
];
