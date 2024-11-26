"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const utils_1 = require("../lib/utils");
const errorHandler = (err, req, res, next) => {
    let status = 500;
    let message = "Something went wrong.";
    let error = "Unexpected error.";
    if (err instanceof utils_1.CustomHTTPError) {
        status = err.status;
        message = err.message || message;
    }
    else {
        error = err.message || error;
    }
    res.status(status).send(err instanceof utils_1.CustomHTTPError ?
        { message } :
        { message, error });
};
exports.errorHandler = errorHandler;
