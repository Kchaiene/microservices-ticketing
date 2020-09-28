import request from "supertest";
import {app} from "../../app";
import mongoose from "mongoose";
import {Order} from "../../models/Order";
import {OrderStatus} from "@kchaiene-corp/common";
import {stripe} from "../../stripe";
import {Payment} from "../../models/Payment";


// jest.mock("../../stripe");

it("404 on Not exist order",async()=>{
  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signupTestAuto())
    .send({
      token:"qrqr",
      orderId: mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("401 on order not belong to the user",async()=>{
  const order = await Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: "User-id",
    price: 20,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signupTestAuto())
    .send({
      token:"qrqr",
      orderId: order.id,
    })
    .expect(401);
});

it("400 on cancelled order",async()=>{
  const order = await Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: mongoose.Types.ObjectId().toHexString(),
    price: 20,
    status: OrderStatus.Cancelled,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signupTestAuto(order.userId))
    .send({
      token:"qrqr",
      orderId: order.id,
    })
    .expect(400);
});


it("201 on valid",async()=>{
  const price = Math.floor(Math.random() * 1000 * 1000);

  const order = await Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: mongoose.Types.ObjectId().toHexString(),
    price: price,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signupTestAuto(order.userId))
    .send({
      token:"tok_visa",
      orderId: order.id,
    })
    .expect(201);

  // Need STRIPE_SECRET in test setup
  const stripeCharges = await stripe.charges.list({limit:50});
  const charge = stripeCharges.data.find(char => char.amount === (price*100) );

  expect(charge).toBeDefined();
  expect(charge!.currency).toEqual("usd");

  const payment = await Payment.findOne({
    orderId: order.id, stripeId: charge!.id
  });
  expect(payment).not.toBeNull();
});



// const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][0];
//
// expect(chargeOptions.source).toEqual("tok_visa");
// expect(chargeOptions.amount).toEqual(order.price * 100);
// expect(chargeOptions.currency).toEqual("usd");

