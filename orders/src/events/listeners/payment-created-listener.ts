import {Listener, OrderStatus, PaymentCreatedEvent, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Order} from "../../models/Order";



export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: PaymentCreatedEvent["subject"] = Subjects.PAYMENT_CREATED;
  queueGroupName = queueGroupName;

  async onMessage(data:PaymentCreatedEvent["data"], msg:Message){
    const {id, orderId, stripeId} = data;

    const updatedOrder = await Order.findById(orderId);
    if (!updatedOrder) {throw new Error("Order not found"); }

    updatedOrder.set({status: OrderStatus.Complete});
    await updatedOrder.save();

    msg.ack();
  }
}

