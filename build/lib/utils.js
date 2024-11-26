"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHTTPError = void 0;
class CustomHTTPError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'CustomHTTPError';
        this.status = status;
    }
}
exports.CustomHTTPError = CustomHTTPError;
;
