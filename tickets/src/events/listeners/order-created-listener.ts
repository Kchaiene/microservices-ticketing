import {Listener, OrderCreatedEvent, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Ticket} from "../../models/Ticket";
import {TicketUpdatedPublisher} from "../publishers/ticket-updated-publisher";



export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: OrderCreatedEvent["subject"] = Subjects.ORDER_CREATED;
  queueGroupName = queueGroupName;

  async onMessage(data:OrderCreatedEvent["data"], msg:Message){
    const {id, ticket,} = data;

    const updatedTicket = await Ticket.findById(ticket.id);
    if (!updatedTicket) {throw new Error("Error Ticket not found!"); }

    updatedTicket.set({orderId: id});
    await updatedTicket.save();
    // await new TicketUpdatedPublisher(this.client).publish({});

    msg.ack();
  }
  
}

