import request from "supertest";
import {app} from "../../app";
import {Ticket} from "../../models/Ticket";
import {Order} from "../../models/Order";
import mongoose from "mongoose";



const getStringId = () => new mongoose.Types.ObjectId().toHexString();

it("fetch orders for an particular user", async()=>{
  // Create three tickets
  const ticket_1 = Ticket.build({id:getStringId(), title:"Ticket_1", price: 10});
  const ticket_2 = Ticket.build({id:getStringId(), title:"Ticket_2", price: 20});
  const ticket_3 = Ticket.build({id:getStringId(), title:"Ticket_3", price: 30});
  await ticket_1.save();
  await ticket_2.save();
  await ticket_3.save();

  // Create different orders
  const user_1Cookie = global.signupTestAuto();
  const user_2Cookie = global.signupTestAuto();

  const {body: order_1} =await request(app)
    .post("/api/orders")
    .set("Cookie", user_1Cookie)
    .send({ticketId: ticket_1.id})
    .expect(201);

  const {body: order_2} = await request(app)
    .post("/api/orders")
    .set("Cookie", user_2Cookie)
    .send({ticketId: ticket_2.id})
    .expect(201);
  const {body: order_3} = await request(app)
    .post("/api/orders")
    .set("Cookie", user_2Cookie)
    .send({ticketId: ticket_3.id})
    .expect(201);

  // Make request to get orders
  const resp = await request(app)
    .get("/api/orders")
    .set("Cookie", user_2Cookie)
    .expect(200);

  expect(resp.body.length).toEqual(2);
  expect(resp.body[0].id).toEqual(order_2.id);
  expect(resp.body[1].id).toEqual(order_3.id);
});



