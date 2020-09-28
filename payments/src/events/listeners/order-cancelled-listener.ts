import {Listener, OrderCancelledEvent, OrderStatus, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Order} from "../../models/Order";


export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: OrderCancelledEvent["subject"] = Subjects.ORDER_CANCELLED;
  queueGroupName = queueGroupName;

  async onMessage(data:OrderCancelledEvent["data"], msg:Message){
    const {id, version,  ticket} = data;

    const updatedOrder = await Order.findById(id);
    if (!updatedOrder) {throw new Error("Order not found"); }

    if (updatedOrder.version < version) {
      updatedOrder.set({version, status:OrderStatus.Cancelled});
      await updatedOrder.save();
    }

    msg.ack();
  }

}

