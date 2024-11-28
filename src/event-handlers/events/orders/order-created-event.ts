import { Subjects } from "../../base";
import { OrderStatus } from "../../../types";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        status: OrderStatus;
        ticket: {
            id: string;
            price: number;
        };
        expiresAt: string;
        user: string;
    }
}   