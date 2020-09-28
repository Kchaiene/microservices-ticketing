import {OrderCreatedListener} from "../order-created-listener";
import {natsWrapper} from "../../../nats-wrapper";
import {OrderCreatedEvent, OrderStatus} from "@kchaiene-corp/common";
import {Message} from "node-nats-streaming";
import {Order} from "../../../models/Order";
import mongoose from "mongoose";



const setup = async () => {
  const listener = new OrderCreatedListener(natsWrapper.client);

  const data:OrderCreatedEvent["data"] = {
    id: mongoose.Types.ObjectId().toHexString(),
    userId: "User-Id",
    status: OrderStatus.Created,
    expiresAt: "asdfadf",
    version: 0,
    ticket: {
      id: "Ticket-Id",
      price: 20,
    }
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return {listener, data, msg};
};



it("create order, acks the message", async()=>{
  const {listener, data, msg} = await setup();

  await listener.onMessage(data, msg);

  const order = await Order.findById(data.id);

  expect(order!.price).toEqual(data.ticket.price);
  expect(order!.userId).toEqual(data.userId);
  expect(order!.version).toEqual(0);

  expect(msg.ack).toHaveBeenCalled();
});

// it("create order, acks the message", async()=>{
//   const {listener, data, msg} = await setup();
//   const {id, version, userId, status, ticket} = data;
//
//   const order = await Order.build({
//     id, version, userId, status, price:ticket.price,
//   });
//   await order.save();
//
//   const updOrder = await Order.build({
//     id, version, userId, status, price:ticket.price,
//   });
//   await updOrder.save();
// });







// it("update versionired order, acks the message", async(done)=>{
//   const {listener, data, msg} = await setup();
//
//   await listener.onMessage(data, msg);
//   const order = await Order.findById(data.id);
//
//   expect(order!.price).toEqual(data.ticket.price);
//   expect(order!.version).toEqual(0);
//
//   data.version = 10;
//   data.ticket.price = 10;
//
//   await listener.onMessage(data, msg);
//   let updatedOrder = await Order.findById(data.id);
//
//   expect(updatedOrder!.price).toEqual(10);
//   expect(updatedOrder!.version).toEqual(10);
//
//   data.version = 5;
//   data.ticket.price = 5;
//
//   await listener.onMessage(data, msg);
//   try {
//     updatedOrder = await Order.findById(data.id);
//   } catch(e) {
//     expect(updatedOrder!.price).toEqual(10);
//     expect(updatedOrder!.version).toEqual(10);
//     return done();
//   }
//
//   throw new Error("Order Update version error");
// });

