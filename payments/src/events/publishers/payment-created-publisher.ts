import {BasePublisher, PaymentCreatedEvent, Subjects} from "@kchaiene-corp/common";


export class PaymentCreatedPublisher extends BasePublisher<PaymentCreatedEvent>{
  subject: PaymentCreatedEvent["subject"] = Subjects.PAYMENT_CREATED;
}


