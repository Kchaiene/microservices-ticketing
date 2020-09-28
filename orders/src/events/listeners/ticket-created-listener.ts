import {Listener, Subjects, TicketCreatedEvent} from "@kchaiene-corp/common";
import {Message} from "node-nats-streaming";
import {queueGroupName} from "./queueGroupName";
import {Ticket} from "../../models/Ticket";



export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject:TicketCreatedEvent["subject"] = Subjects.TICKET_CREATED;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent["data"], msg:Message){
    const {id, title, price} = data;

    const newTicket = Ticket.build({id, title, price});
    await newTicket.save();

    // console.log("");
    msg.ack();
  }
}

