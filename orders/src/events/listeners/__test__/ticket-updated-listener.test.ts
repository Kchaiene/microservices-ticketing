import {Message} from "node-nats-streaming";
import {natsWrapper} from "../../../nats-wrapper";
import {TicketUpdatedListener} from "../ticket-updated-listener";
import mongoose from "mongoose";
import {Ticket} from "../../../models/Ticket";
import {TicketUpdatedEvent} from "@kchaiene-corp/common";




const setup  = async () => {
  // Createa listener
  const listener = new TicketUpdatedListener(natsWrapper.client);
  // Create and save ticket
  const ticket = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "Title",
    price: 20
  });
  await ticket.save();
  // Create fake msg and data objects
  const data:TicketUpdatedEvent["data"] = {
    id:ticket.id,
    version: 1,
    title: "Updated",
    price: 1,
    userId: "qwe123"
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return {listener, ticket, data, msg}
};



it("Success update", async ()=>{
  const {listener, ticket, data, msg} = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.version).toEqual(data.version);
  expect(updatedTicket!.title).toEqual(data.title);
  expect(updatedTicket!.price).toEqual(data.price);
});

it("acks the message", async()=>{
  const {listener, ticket, data, msg} = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it("Have latest version and ignore past", async()=>{
  const {listener, ticket, data, msg} = await setup();
  data.version = 9; data.price = 9;

  await listener.onMessage(data, msg);
  expect(msg.ack).toHaveBeenCalled();

  const wrongData = {
    id:ticket.id,
    version: 5,
    title: "Wrong",
    price: 5,
    userId: "qwe123"
  };
  await listener.onMessage(wrongData, msg);
  expect(msg.ack).toBeCalledTimes(2);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.version).toEqual(data.version);
  expect(updatedTicket!.title).toEqual(data.title);
  expect(updatedTicket!.price).toEqual(data.price);
});

//
// it("not acks and not save concurrency past version", async()=>{
//   const {listener, ticket, data, msg} = await setup();
//   data.version = 9; data.price = 9;
//
//   await listener.onMessage(data, msg);
//   expect(msg.ack).toHaveBeenCalled();
//
//   const wrongData = {
//     id:ticket.id,
//     version: 5,
//     title: "Wrong",
//     price: 5,
//     userId: "qwe123"
//   };
//   await listener.onMessage(wrongData, msg);
//   expect(msg.ack).toBeCalledTimes(2);
//
//   const updatedTicket = await Ticket.findById(ticket.id);
//
//   expect(updatedTicket!.version).toEqual(data.version);
//   expect(updatedTicket!.title).toEqual(data.title);
//   expect(updatedTicket!.price).toEqual(data.price);
// });
//

