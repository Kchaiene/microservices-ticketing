import express, {Request, Response} from "express";
import {NotAuthorizedError, NotFoundError, OrderStatus, requireAuth} from "@kchaiene-corp/common";
import {Order} from "../models/Order";
import {OrderCancelledPublisher} from "../events/publishers/order-cancelled-publisher";
import {natsWrapper} from "../nats-wrapper";


const router = express.Router();

router.delete("/api/orders/:orderId",
  requireAuth,
  async (req:Request,res:Response)=>{
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
      // .populate("ticket");
    if (!order) {throw new NotFoundError(); }

    if (order.userId !== req.currentUser!.id) {throw new NotAuthorizedError(); }

    order.status = OrderStatus.Cancelled;
    await order.save();

    const {id, version, ticket} = order;
    new OrderCancelledPublisher(natsWrapper.client).publish({
      id, version,
      ticket: {
        id: ticket.toString()
      }
    });

    res.status(202).json(order);
});



export {router as deleteOrderRouter}

