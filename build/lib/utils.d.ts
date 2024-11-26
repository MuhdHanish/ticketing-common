export declare class CustomHTTPError extends Error {
    status: number;
    constructor(message: string, status: number);
}
