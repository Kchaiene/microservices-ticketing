import request from "supertest";
import {app} from "../../app";


it("return 201 status", async ()=>{
  return request(app)
    .post("/api/users/signup")
    .send({
      email:"qqq@qqq.com",
      password: "1234",
    })
    .expect(201);
} );

it("return 400 status with invalid email", async ()=>{
  return request(app)
    .post("/api/users/signup")
    .send({
      email:"qqqqqq.com",
      password: "1234",
    })
    .expect(400);
} );

it("return 400 status with invalid password", async ()=>{
  return request(app)
    .post("/api/users/signup")
    .send({
      email:"qqq@qqq.com",
      password: "123",
    })
    .expect(400);
} );

it("disallow duplicate password", async ()=>{
  await request(app)
    .post("/api/users/signup")
    .send({
      email:"qqq@qqq.com",
      password: "1234",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email:"qqq@qqq.com",
      password: "1234",
    })
    .expect(400);
} );

it("Set-Cookie header is exists in response", async ()=> {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "qqq@qqq.com",
      password: "1234",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
