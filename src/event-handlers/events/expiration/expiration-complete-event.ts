import { Subjects } from "../../base";

export interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete;
    data: {
        order: string;
    };
}