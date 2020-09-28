import express, {Request, Response} from "express";
import {body} from "express-validator";
import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
  requireAuth,
  validateRequest
} from "@kchaiene-corp/common";
import {Order} from "../models/Order";
import {stripe} from "../stripe";
import {Payment} from "../models/Payment";
import {PaymentCreatedPublisher} from "../events/publishers/payment-created-publisher";
import {natsWrapper} from "../nats-wrapper";


const router = express.Router();


router.post("/api/payments",
  requireAuth,
  [
    body("token").not().isEmpty(),
    body("orderId").not().isEmpty(),
  ],
  validateRequest,
  async (req:Request, res:Response) =>{
    const {token, orderId} = req.body;

    const order = await Order.findById(orderId);
    if (!order) {throw new NotFoundError(); }

    if (order.userId !== req.currentUser!.id) {throw new NotAuthorizedError(); }
    if (order.status === OrderStatus.Cancelled) {throw new BadRequestError("Order is cancelled"); }
    if (order.status === OrderStatus.Complete) {throw new BadRequestError("Order is already complete"); }

    const charge = await stripe.charges.create({
      currency: "usd",
      amount: order.price *100,
      source: token,
    });

    const newPayment = Payment.build({
      orderId: order.id,
      stripeId: charge.id,
    });
    await newPayment.save();

    // order.set({status:OrderStatus.Complete, version:order});
    // await order.save();

    new PaymentCreatedPublisher(natsWrapper.client).publish({
      id: newPayment.id,
      orderId: newPayment.orderId,
      stripeId: newPayment.stripeId,
    });


    res.status(201).json({payment: newPayment, order});
});


export { router as createChargeRouter };


