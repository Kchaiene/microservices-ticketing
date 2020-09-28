import {ExpirationCompleteEvent, Listener, OrderStatus, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Order} from "../../models/Order";
import {OrderCancelledPublisher} from "../publishers/order-cancelled-publisher";


export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  subject: ExpirationCompleteEvent["subject"] = Subjects.EXPIRATION_COMPLETE;
  queueGroupName = queueGroupName;

  async onMessage(data:ExpirationCompleteEvent["data"], msg:Message){
    const {orderId} = data;

    const order = await Order.findById(orderId);
    if (!order) {throw new Error("Order not found"); }
    if (order.status === OrderStatus.Complete) {return msg.ack(); }

    order.set({ status:OrderStatus.Cancelled });
    await order.save();

    // Publish
    {
      const {id, version, ticket} = order;
      await new OrderCancelledPublisher(this.client).publish({
        id, version,
        ticket: {
          id: String( ticket ),
        }
      });
    }

    msg.ack();
  }

}