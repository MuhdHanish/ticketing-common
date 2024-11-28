import { param } from "express-validator";

export const validParamId = [
    param('id')
        .isMongoId()
        .withMessage('Invalid ticket id.')
];