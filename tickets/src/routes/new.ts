import express, {Request, Response} from "express";
import {requireAuth, validateRequest} from "@kchaiene-corp/common";
import {body, } from "express-validator";
import {Ticket} from "../models/Ticket";
import {TicketCreatedPublisher} from "../events/publishers/ticket-created-publisher";
import {natsWrapper} from "../nats-wrapper";


const router = express.Router();


router.post("/api/tickets", requireAuth, [
    body("title").not().isEmpty().withMessage("Title is require!"),
    body("price").isFloat({gt:0}).withMessage("Price must be correct!"),
  ],
  validateRequest,
  async (req:Request, res:Response)=>{
    const {title, price} = req.body;

    const ticket = await Ticket.build({
      title, price, userId: req.currentUser!.id,
    });
    await ticket.save();
    {
      const {id, version, title, price, userId} = ticket;
      new TicketCreatedPublisher(natsWrapper.client).publish({
        id, version, title, price, userId });
    }
    res.status(201).send(ticket);
});



export { router as createTicketRouter };
