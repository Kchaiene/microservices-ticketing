import {Listener, OrderCancelledEvent, Subjects} from "@kchaiene-corp/common";
import { queueGroupName } from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Ticket} from "../../models/Ticket";
// import {TicketUpdatedPublisher} from "../publishers/ticket-updated-publisher";



export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: OrderCancelledEvent["subject"] = Subjects.ORDER_CANCELLED;
  queueGroupName = queueGroupName;

  async onMessage(data:OrderCancelledEvent["data"], msg:Message){
    const {ticket} = data;

    const updatedTicket = await Ticket.findById(ticket.id);
    if (!updatedTicket) {throw new Error("Error Ticket not found"); }

    updatedTicket.set({orderId: undefined});
    await updatedTicket.save();

    // await new TicketUpdatedPublisher(this.client).publish({});

    msg.ack()
  }

}

