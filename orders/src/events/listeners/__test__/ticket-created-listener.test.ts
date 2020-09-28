import {TicketCreatedListener} from "../ticket-created-listener";
import {natsWrapper} from "../../../nats-wrapper";
import {TicketCreatedEvent} from "@kchaiene-corp/common";
import mongoose from "mongoose";
import {Message} from "node-nats-streaming";
import {Ticket} from "../../../models/Ticket";



const setup = () => {
  // create instance of the listener
  const listener = new TicketCreatedListener(natsWrapper.client);

  // create fake event
  const data: TicketCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0, price: 20, title: "Title", userId: "user-123"
  };

  // create fake message(msg)
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return {listener, data, msg}
};


it("create and save ticket", async ()=>{
  const {listener, data, msg} = setup();

  // call onMessage with both event and message
  await listener.onMessage(data, msg);

  // assertions
  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();
  expect(ticket!.title).toEqual(data.title);
  expect(ticket!.price).toEqual(data.price);
  // @ts-ignore
  expect(ticket.userId).not.toBeDefined();
});

it("ack the message", async ()=>{
  const {listener, data, msg} = setup();

  // call onMessage with both event and message
  await listener.onMessage(data, msg);

  // assertions
  expect(msg.ack).toHaveBeenCalled();
});










