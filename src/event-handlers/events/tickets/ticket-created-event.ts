import { Subjects } from "../../base";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string;
        title: string;
        price: number;
        user: string;
        version: number;
    }
}