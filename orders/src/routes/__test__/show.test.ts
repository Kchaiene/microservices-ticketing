import request from "supertest";
import {Ticket} from "../../models/Ticket";
import {app} from "../../app";
import mongoose from "mongoose";


const stringId = new mongoose.Types.ObjectId().toHexString();

it("Fetches the order", async()=>{
  const ticket = Ticket.build({id:stringId, title:"Title", price:20 });
  await ticket.save();

  const userCookie = global.signupTestAuto();

  const { body:order } = await request(app)
    .post("/api/orders")
    .set("Cookie", userCookie)
    .send({ticketId: ticket.id})
    .expect(201);

  const {body} = await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", userCookie)
    .expect(200);

  expect(body.id).toEqual(order.id);
});

it("Error on another user order", async()=>{
  const ticket = Ticket.build({id:stringId, title:"Title", price:20 });
  await ticket.save();

  const userCookie = global.signupTestAuto();

  const { body:order } = await request(app)
    .post("/api/orders")
    .set("Cookie", userCookie)
    .send({ticketId: ticket.id})
    .expect(201);

   await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", global.signupTestAuto())
    .expect(401);
});



