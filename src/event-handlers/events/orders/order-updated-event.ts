import { OrderStatus } from "../../../types";
import { Subjects } from "../../base";

export interface OrderUpdatedEvent {
    subject: Subjects.OrderUpdated;
    data: {
        id: string;
        status: OrderStatus;
        ticket: {
            id: string;
            price: number;
        };
        expiresAt: string;
        user: string;
        version: number;
    }
}