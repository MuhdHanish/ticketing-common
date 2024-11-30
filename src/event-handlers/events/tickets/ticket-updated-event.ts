import { Subjects } from "../../base";

export interface TickUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        user: string;
        version: number;
        order?: string;
    }
}