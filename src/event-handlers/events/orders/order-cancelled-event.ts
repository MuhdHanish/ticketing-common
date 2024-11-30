import { Subjects } from "../../base";
import { OrderStatus } from "../../../types";

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        version: number;
        ticket: {
            id: string;
        };
    }
}   