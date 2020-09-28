import request = require("supertest");
import {app} from "../../app";
import mongoose from "mongoose";
import {Ticket} from "../../models/Ticket";
import {Order} from "../../models/Order";
import {OrderStatus} from "@kchaiene-corp/common";
import {natsWrapper} from "../../nats-wrapper";


const stringId = new mongoose.Types.ObjectId().toHexString();

it("Error on not existing ticket", async ()=>{
  const ticketId = mongoose.Types.ObjectId();
  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signupTestAuto())
    .send({ticketId})
    .expect(404);
});

it("Error on already reserved ticket", async ()=>{
  const ticket = Ticket.build({id:stringId, title: "Ticket", price: 20});
  await ticket.save();
  // console.log("Ordser", ticket, ticket.id);

  const order = Order.build({
    userId: "asgasgasg",
    status: OrderStatus.Created,
    expiresAt: new Date(),
    ticket,
  });
  await order.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signupTestAuto())
    .send({ticketId: ticket._id})
    .expect(400);
});

it("Success reserve", async ()=>{
  const ticket = Ticket.build({id:stringId, title: "Ticket", price: 20});
  await ticket.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signupTestAuto())
    .send({ticketId: ticket.id})
    .expect(201);
});

it("Emit orderCreated event", async ()=>{
  const ticket = Ticket.build({id:stringId, title: "Ticket", price: 20});
  await ticket.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signupTestAuto())
    .send({ticketId: ticket.id})
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

