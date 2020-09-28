import {BasePublisher, Subjects, TicketUpdatedEvent} from "@kchaiene-corp/common";





export class TicketUpdatedPublisher extends BasePublisher<TicketUpdatedEvent> {
  subject: TicketUpdatedEvent["subject"] = Subjects.TICKET_UPDATED;

}


