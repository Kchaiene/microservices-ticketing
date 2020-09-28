import {OrderCancelledEvent, OrderStatus} from "@kchaiene-corp/common";
import {Ticket} from "../../../models/Ticket";
import {natsWrapper} from "../../../nats-wrapper";
import {OrderCancelledListener} from "../order-cancelled-listener";



const setup = async () => {
  // Create an instance of listener
  const listener = new OrderCancelledListener(natsWrapper.client);
  // Create ticket
  const ticket = Ticket.build({
    title: "Ticket",
    price: 20,
    userId: "User-Id"
  });
  ticket.set({orderId: "Order-Id"});
  await ticket.save();
  // Create fake msg and data
  const data:OrderCancelledEvent["data"] = {
    id: "Order-Id",
    version: 0,
    ticket:{
      id: ticket.id,
    }
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return {listener, ticket, data, msg}
};


it("updates ticket, acks message", async()=>{
  const {listener, ticket, data, msg} = await setup();

  await listener.onMessage(data, msg);

  const updTic = await Ticket.findById(ticket.id);

  expect(updTic!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
});



