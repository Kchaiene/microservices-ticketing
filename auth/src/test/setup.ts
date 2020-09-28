import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import {app} from "../app";
import request from "supertest";


declare global {
  namespace NodeJS {
    interface Global {
      signupTestAuto(): Promise<string[]>;
    }
  }
}



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
  const collections = await mongoose.connection.db.collections();

  for (let collect of collections) {
    await collect.deleteMany({});
  }
});

afterAll(async()=>{
  await mongo.stop();
  await mongoose.connection.close();
});


global.signupTestAuto = async () => {
  const email = "qqq@qqq.com";
  const password = "1234";

  const response = await request(app)
    .post("/api/users/signup")
    .send({email, password})
    .expect(201);

  const cookie = response.get("Set-Cookie");
  return cookie;
};

