import request from "supertest";
import {app} from "../../app";
import {Ticket} from "../../models/Ticket";
import {natsWrapper} from "../../nats-wrapper";



it("Exist Post handler on /api/tickets", async()=>{
  const response = await request(app)
    .post("/api/tickets")
    .send({});

  expect(response.status).not.toEqual(404);
});

it("401 on NOT signed in", async()=>{
  await request(app)
    .post("/api/tickets")
    .send({})
    .expect(401);
});

it("If user signed in", async()=>{
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("Error on invalid title", async()=>{
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      title: "",
      price: 100
    })
    .expect(400);

  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      price: 100
    })
    .expect(400);
});


it("Error on invalid price", async()=>{
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      title: "Ticket",
      price: -10
    })
    .expect(400);

  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      title: "Ticket",
    })
    .expect(400);
});

it("Create tickets", async()=>{
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  const title = "Ticket";
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      title,
      price: 20,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(20);
  expect(tickets[0].title).toEqual(title);
});


it("publish an event", async ()=>{
  const title = "Ticket";
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({
      title,
      price: 20,
    })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
