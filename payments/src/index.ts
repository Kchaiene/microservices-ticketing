import mongoose from "mongoose";
import {app} from "./app";
import {OrderCreatedListener} from "./events/listeners/order-created-listener";
import {natsWrapper} from "./nats-wrapper";
import {OrderCancelledListener} from "./events/listeners/order-cancelled-listener";

// import {MongoMemoryServer} from "mongodb-memory-server";

// "debug": "1"

async function start () {
  // process.env.JWT_SECRET = "2q3sdfgdf";
  // await connectInMemoryDb();
  if (!process.env.JWT_SECRET) {throw new Error("Error no JWT_SECRET"); }
  if (!process.env.MONGO_URI) {throw new Error("Error no MONGO_URI"); }
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
  new OrderCancelledListener(natsWrapper.client).listen();

  await connectDb(process.env.MONGO_URI);

  app.listen(3000, ()=>{
    console.log("Auth on port 3000");
  });
}
start();


async function connectDb(uri: string){
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("MongoDB connected")
  } catch (e) {
    console.error("Error MongoDb connect ==>", e.message);
  }
}
//
// async function connectInMemoryDb(){
//   try {
//     const mongo = new MongoMemoryServer({ binary: { version: '4.2.6' } });
//     const mongoUri = await  mongo.getUri();
//
//     await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true
//     });
//     console.log("InMemoryMongo connected")
//   } catch (e) {
//     console.error("Error InMemoryMongo connect ==>", e.message);
//   }
// }

