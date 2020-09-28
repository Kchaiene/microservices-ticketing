import {BasePublisher, Subjects, TicketCreatedEvent} from "@kchaiene-corp/common";





export class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent> {
  subject: TicketCreatedEvent["subject"] = Subjects.TICKET_CREATED;

}


