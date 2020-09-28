import {Listener, OrderCreatedEvent, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {Order} from "../../models/Order";



export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
  subject: OrderCreatedEvent["subject"] = Subjects.ORDER_CREATED;
  queueGroupName = queueGroupName;

  async onMessage(data:OrderCreatedEvent["data"], msg:Message){
    const {id, version, userId, status, ticket} = data;

    const newOrder = Order.build({
      id, version, userId, status, price:ticket.price
    });
    await newOrder.save();

    msg.ack();
  }

}

