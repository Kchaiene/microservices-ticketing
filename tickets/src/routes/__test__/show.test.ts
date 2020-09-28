import request from "supertest";
import {app} from "../../app";
import {Ticket} from "../../models/Ticket";
import mongoose from "mongoose";



it("404 on ticket not found", async()=>{
  const mongoId = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .get(`/api/tickets/${mongoId}`)
    .send()
    .expect(404);
});

it("return ticket on ticket found", async()=>{
  const title = "Ticket";

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({title, price: 20})
    .expect(201);

  const resp = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(resp.body.title).toEqual(title);
  expect(resp.body.price).toEqual(20);
});




