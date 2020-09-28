import {BasePublisher} from "./base-publisher";
import {TicketCreatedEvent} from "./ticket-created-event";
import {Subjects} from "./subjects";




export class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent>{
  subject: TicketCreatedEvent["subject"] = Subjects.TICKET_CREATED;

}
