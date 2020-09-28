import request from "supertest";
import {Ticket} from "../../models/Ticket";
import {app} from "../../app";
import {OrderStatus} from "@kchaiene-corp/common";
import {Order} from "../../models/Order";
import {natsWrapper} from "../../nats-wrapper";
import mongoose from "mongoose";




const stringId = new mongoose.Types.ObjectId().toHexString();


it("Success order canceled", async ()=>{
  const ticket = Ticket.build({id:stringId,title:"Title", price: 20 });
  await ticket.save();

  const userCookie = global.signupTestAuto();

  const {body: order} = await request(app)
    .post("/api/orders")
    .set("Cookie", userCookie)
    .send({ticketId: ticket.id})
    .expect(201);

  const resp = await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie", userCookie)
    .send()
    .expect(202);

  const updatedOrder = await Order.findById(order.id);
  // console.log("order", order);
  // console.log("resp", resp.body);
  // console.log("updatedOrder", updatedOrder!.ticket, updatedOrder!.ticket.toString() );

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it("emit event on cancel order", async ()=>{
  const ticket = Ticket.build({id:stringId, title:"Title", price: 20 });
  await ticket.save();

  const userCookie = global.signupTestAuto();

  const {body: order} = await request(app)
    .post("/api/orders")
    .set("Cookie", userCookie)
    .send({ticketId: ticket.id})
    .expect(201);

  const resp = await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie", userCookie)
    .send()
    .expect(202);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
