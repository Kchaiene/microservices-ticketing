import {OrderCreatedListener} from "../order-created-listener";
import {natsWrapper} from "../../../nats-wrapper";
import {OrderCreatedEvent, OrderStatus} from "@kchaiene-corp/common";
import {Ticket} from "../../../models/Ticket";
import {Message} from "node-nats-streaming";



const setup = async () => {
  // Create an instance of listener
  const listener = new OrderCreatedListener(natsWrapper.client);
  // Create ticket
  const ticket = Ticket.build({
    title: "Ticket",
    price: 20,
    userId: "1124",
  });
  await ticket.save();
  // Create fake msg and data
  const data:OrderCreatedEvent["data"] = {
    id: "order-id",
    version: 0,
    status: OrderStatus.Created,
    userId: "user-id",
    expiresAt: new Date().getTime().toString(),
    ticket:{
      id: ticket.id,
      price: ticket.price
    }
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return {listener, ticket, data, msg}
};



it("Set the orderId to the ticket", async ()=>{
  const {listener, ticket, data, msg} = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.orderId).toEqual(data.id);
});

it("acks the message", async ()=>{
  const {listener, ticket, data, msg} = await setup();

  await listener.onMessage(data, msg);
  // @ts-ignore
  // console.log(natsWrapper.client.publish.mock.calls);

  expect(msg.ack).toHaveBeenCalled();
});

// it("publish ticket updated event", async ()=>{
//   const {listener, ticket, data, msg} = await setup();
//
//   await listener.onMessage(data, msg);
//
//   expect(natsWrapper.client.publish).toHaveBeenCalled();
//
//   (natsWrapper.client.publish as jest.Mock).mock.calls[0]);
// });
