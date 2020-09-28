import express, {Request, Response} from "express";
import mongoose from "mongoose";
import {BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest} from "@kchaiene-corp/common";
import {body} from "express-validator";
import {Ticket} from "../models/Ticket";
import {Order} from "../models/Order";
import {natsWrapper} from "../nats-wrapper";
import {OrderCreatedPublisher} from "../events/publishers/order-created-publisher";


const router = express.Router();

const EXPIRATION_SECONDS = 10 * 60;

router.post("/api/orders", requireAuth, [
    body("ticketId").not().isEmpty()
      .custom((input:string)=> mongoose.Types.ObjectId.isValid(input))
      .withMessage("Error no ticketId")
  ],
  validateRequest,
  async (req:Request, res:Response)=>{
    const { ticketId } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {throw new NotFoundError(); }

    const isReserved = await ticket.isReserved();
    if (isReserved) {throw new BadRequestError("Ticket is already reserved"); }

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_SECONDS);

    const newOrder = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expiresAt: expiration,
      ticket,
    });
    await newOrder.save();

    const {id, version, status, userId, expiresAt} = newOrder;
    new OrderCreatedPublisher(natsWrapper.client).publish({
      id, version, status, userId,
      expiresAt: expiresAt.toISOString(),
      ticket: {
        id: ticket.id,
        price: ticket.price,
      }
    });

    res.status(201).send(newOrder);
});



export {router as newOrderRouter}

