import {natsWrapper} from "../../../nats-wrapper";
import {OrderCancelledEvent, OrderStatus} from "@kchaiene-corp/common";
import {Message} from "node-nats-streaming";
import {Order} from "../../../models/Order";
import mongoose from "mongoose";
import {OrderCancelledListener} from "../order-cancelled-listener";



const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    price: 20,
    status: OrderStatus.Created,
    userId: "User-Id",
  });
  await order.save();

  const data:OrderCancelledEvent["data"] = {
    id: order.id,
    version: 1,
    ticket: {
      id: "Ticket-Id",
    }
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return {listener, order, data, msg};
};



it("create order, acks the message", async()=>{
  const {listener, order, data, msg} = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
  expect(updatedOrder!.version).toEqual(data.version);

  expect(msg.ack).toHaveBeenCalled();
});
