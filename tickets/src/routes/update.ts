import express, {Request, Response} from "express";
import {Ticket} from "../models/Ticket";
import {BadRequestError, NotAuthorizedError, NotFoundError, requireAuth, validateRequest,} from "@kchaiene-corp/common";
import {body} from "express-validator";
import {natsWrapper} from "../nats-wrapper";
import {TicketCreatedPublisher} from "../events/publishers/ticket-created-publisher";
import {TicketUpdatedPublisher} from "../events/publishers/ticket-updated-publisher";


const router = express.Router();


router.put("/api/tickets/:id", requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is require!"),
    body("price").isFloat({gt:0}).withMessage("Price must be correct!"),
  ],
  validateRequest,
  async (req:Request, res:Response)=>{
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {throw new NotFoundError(); }

    if (ticket.orderId) {throw new BadRequestError("Cannot edit a reserved ticket"); }

    if (ticket.userId !== req.currentUser!.id) {throw new NotAuthorizedError(); }


    const {title, price} = req.body;
    ticket.set({title, price});
    await ticket.save();

    {
      const {_id:id, title, price, userId, version} = ticket;
      new TicketUpdatedPublisher(natsWrapper.client)
        .publish({  id, version, title, price, userId }) ;
    }

    res.status(200).send(ticket);
});



export { router as updateTicketRouter };

