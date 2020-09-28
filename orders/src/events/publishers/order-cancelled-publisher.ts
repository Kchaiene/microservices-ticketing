import {BasePublisher, OrderCancelledEvent, Subjects} from "@kchaiene-corp/common";




export class OrderCancelledPublisher extends BasePublisher<OrderCancelledEvent> {
  subject: OrderCancelledEvent["subject"] = Subjects.ORDER_CANCELLED;
}

