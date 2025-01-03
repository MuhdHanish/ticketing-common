import { NextFunction, Request, Response } from "express";
import { CustomHTTPError } from "../lib/utils";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let status = 500;
    let message = "Something went wrong.";
    let error = "Unexpected error.";
    
    if (err instanceof CustomHTTPError) {
        status = err.status;
        message = err.message || message;
    } else {
        error = err.message || error;
    }

    if (status >= 500) {
        console.error(`
        [ERROR] ${new Date().toISOString()}
        Method: ${req.method}
        Path: ${req.path}
        Status: ${status}
        Message: ${message}
        Error: ${error}
    `);
    }


    res.status(status).send(
        err instanceof CustomHTTPError ?
            { message } :
            { message, error }
    );
};