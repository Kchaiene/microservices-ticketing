import mongoose from "mongoose";
import {app} from "./app";
// import {MongoMemoryServer} from "mongodb-memory-server";

// "debug": "1"

async function start () {
  // process.env.JWT_SECRET = "2q3sdfgdf";
  // await connectInMemoryDb();
  // console.log("STARTING UP ==> INDEX");
  if (!process.env.JWT_SECRET) {throw new Error("Error no JWT_SECRET"); }
  if (!process.env.MONGO_URI) {throw new Error("Error no MONGO_URI"); }

  await connectDb(process.env.MONGO_URI);

  app.listen(3000, ()=>{
    console.log("Auth on port 3000");
  });
}
start();


async function connectDb(uri:string){
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

