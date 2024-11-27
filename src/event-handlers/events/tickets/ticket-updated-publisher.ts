import { Publisher, Subjects } from "../../base";
import { TickUpdatedEvent } from "./ticket-updated-event";

export class TicketUpdatedPublisher extends Publisher<TickUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}