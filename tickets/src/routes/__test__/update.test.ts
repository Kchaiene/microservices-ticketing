import request from "supertest";
import {app} from "../../app";
import {Ticket} from "../../models/Ticket";
import mongoose from "mongoose";
import {natsWrapper} from "../../nats-wrapper";




const title = "Ticket";
const price = 20;
const mongoId = new mongoose.Types.ObjectId().toHexString();


it("404 on does exist ticket's id", async()=>{
  const resp = await request(app)
    .put(`/api/tickets/${mongoId}`)
    .set("Cookie", global.signupTestAuto())
    .send({title, price})
    .expect(404);
});

it("401 on not auth", async()=>{
  const resp = await request(app)
    .put(`/api/tickets/${mongoId}`)
    .send({title, price})
    .expect(401);
});

it("401 on not owner of ticket", async()=>{
  const resp = await request(app)
    .post(`/api/tickets`)
    .set("Cookie", global.signupTestAuto())
    .send({title, price})
    .expect(201);

  const response = await request(app)
    .put(`/api/tickets/${resp.body.id}`)
    .set("Cookie", global.signupTestAuto())
    .send({
      title: "New Title",
      price: 1000
    })
    .expect(401);


});

it("400 on invalid title or price", async()=>{
  const cookie = global.signupTestAuto();

  const resp = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({title, price})
    .expect(201);

  await request(app)
    .put(`/api/tickets/${resp.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "",
      price: 1000
    })
    .expect(400);
  await request(app)
    .put(`/api/tickets/${resp.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "New Title",
      price: -10
    })
    .expect(400);
});

it("200 on valid title or price", async()=>{
  const cookie = global.signupTestAuto();

  const resp = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({title, price})
    .expect(201);

  await request(app)
    .put(`/api/tickets/${resp.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "New Title",
      price: 1000
    })
    .expect(200);

  const ticket = await request(app)
    .get(`/api/tickets/${resp.body.id}`)
    .send()
    .expect(200);

  expect(ticket.body.title).toEqual("New Title");
  expect(ticket.body.price).toEqual(1000);
});

it("publish an event", async ()=>{
  const cookie = global.signupTestAuto();

  const resp = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({title, price})
    .expect(201);

  await request(app)
    .put(`/api/tickets/${resp.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "New Title",
      price: 1000
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it("reject update reserved ticket", async ()=>{
  const cookie = global.signupTestAuto();

  const {body: ticketResp} = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({title, price})
    .expect(201);

  const ticket = await Ticket.findById(ticketResp.id);
  ticket!.set({orderId:"Order-Id"});
  await ticket!.save();

  await request(app)
    .put(`/api/tickets/${ticket!.id}`)
    .set("Cookie", cookie)
    .send({
      title: "New Title",
      price: 1000
    })
    .expect(400);
});

