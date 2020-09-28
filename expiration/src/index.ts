import {natsWrapper} from "./nats-wrapper";
import {OrderCreatedListener} from "./events/listeners/order-created-listener";
// import {MongoMemoryServer} from "mongodb-memory-server";



async function start () {
  if (!process.env.NATS_CLIENT_ID) {throw new Error("Error no NATS_CLIENT_ID"); }
  if (!process.env.NATS_CLUSTER_ID) {throw new Error("Error no NATS_CLUSTER_ID"); }
  if (!process.env.NATS_URL) {throw new Error("Error no NATS_URL"); }

  await natsWrapper.connect(process.env.NATS_CLUSTER_ID,
    process.env.NATS_CLIENT_ID, process.env.NATS_URL);
  natsWrapper.client.on("close", ()=>{
    console.log("Nats connection closed!");
    process.exit();
  });
  process.on("SIGINT", ()=> natsWrapper.client.close() );
  process.on("SIGTERM", ()=> natsWrapper.client.close() );

  new OrderCreatedListener(natsWrapper.client).listen();
}
start().catch(e=>console.log("Error Insex start ==>", e.message));

