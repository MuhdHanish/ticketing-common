import { Message } from "node-nats-streaming";
import { TickUpdatedEvent } from "./ticket-updated-event";
import { Subjects, Listener } from "../../base";

export class TicketUpdatedListener extends Listener<TickUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
    queueGroupName = "ticket-updated-service";

    onMessage(data: TickUpdatedEvent["data"], msg: Message) {
        console.log(`#${msg.getSequence()} - Data:`, data);
        msg.ack();
    }
}