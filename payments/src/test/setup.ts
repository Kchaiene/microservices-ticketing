import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import {app} from "../app";
import request from "supertest";
import {response} from "express";
import jwt from "jsonwebtoken";



declare global {
  namespace NodeJS {
    interface Global {
      signupTestAuto(id?:string): string[];
    }
  }
}

jest.mock("../nats-wrapper");

process.env.STRIPE_SECRET = "sk_test_55OK6XZ9tlfsAbvjgQbLFHVM00i4FY5J5G";

let mongo: any;
beforeAll(async ()=>{
  process.env.JWT_SECRET = "asdfasaf";

  mongo = new MongoMemoryServer({ binary: { version: '4.2.6' } });
  const mongoUri = await  mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
});

beforeEach(async ()=>{
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collect of collections) {
    await collect.deleteMany({});
  }
});

afterAll(async()=>{
  await mongo.stop();
  await mongoose.connection.close();
});


global.signupTestAuto = (id?:string) => {
  // Create a token
  const payload = {
    email:"q@q.com",
    userId: id || new mongoose.Types.ObjectId().toHexString(),
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET!);

  // Turn session in json
  const sessionJson = JSON.stringify({jwt: token});

  // Encode in base64
  const base64 = Buffer.from(sessionJson).toString("base64");

  return [ `express:sess=${base64}` ];
};

