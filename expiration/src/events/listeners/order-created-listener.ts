import {Listener, OrderCreatedEvent, Subjects} from "@kchaiene-corp/common";
import {queueGroupName} from "./queueGroupName";
import {Message} from "node-nats-streaming";
import {expirationQueue} from "../../queues/expiration-queue";



// const EXPIRATION = 30 * 1000;

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: OrderCreatedEvent["subject"] = Subjects.ORDER_CREATED;
  queueGroupName = queueGroupName;

  async onMessage(data:OrderCreatedEvent["data"], msg:Message){
    const { id:orderId, expiresAt,} = data;

    // const delay = new Date(expiresAt).getTime() - Date.now() + EXPIRATION;
    const delay = new Date(expiresAt).getTime() - Date.now();

    await expirationQueue.add({orderId},{delay});

    msg.ack();
  }

}

