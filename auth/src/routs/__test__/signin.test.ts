import request from "supertest";
import {app} from "../../app";


it("fail with not existing email", async ()=>{
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "aaa@aaa.com",
      password: "1234",
    })
    .expect(400);
});

it("fail with incorrect password", async ()=>{
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "aaa@aaa.com",
      password: "1234",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "aaa@aaa.com",
      password: "12345",
    })
    .expect(400);
});


it("response with cookie header", async ()=>{
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "aaa@aaa.com",
      password: "1234",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "aaa@aaa.com",
      password: "1234",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});