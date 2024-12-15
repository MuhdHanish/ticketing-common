import { Subjects } from "../../base";

export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        order: string;
        stripe: string;
    };
}