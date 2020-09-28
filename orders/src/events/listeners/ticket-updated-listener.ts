import {Listener, Subjects, TicketUpdatedEvent} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Ticket} from "../../models/Ticket";




export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: TicketUpdatedEvent["subject"] = Subjects.TICKET_UPDATED;
  queueGroupName = queueGroupName;

  async onMessage(data:TicketUpdatedEvent["data"], msg:Message) {
    const {id, version, title, price} = data;

    // const ticket = await Ticket.findByEvent({id,version});
    // if (!ticket) {throw new Error("Ticket not found"); }
    // ticket.set({title, price});
    // await ticket.save();

    const ticket = await Ticket.findById(id);
    if (!ticket) {throw new Error("Ticket not found"); }
    if (ticket.version < version) {
      ticket.set({title, price, version});
      await ticket.save();
    }

    msg.ack();
  }

}
