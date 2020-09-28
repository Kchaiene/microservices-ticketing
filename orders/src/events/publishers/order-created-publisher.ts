import {BasePublisher, OrderCreatedEvent, Subjects} from "@kchaiene-corp/common";




export class OrderCreatedPublisher extends BasePublisher<OrderCreatedEvent> {
  subject: OrderCreatedEvent["subject"] = Subjects.ORDER_CREATED;
}

