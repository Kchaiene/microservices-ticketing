import request from "supertest";
import {app} from "../../app";



it("clears cookie after signout", async()=>{
  const resp = await request(app)
    .post("/api/users/signup")
    .send({
      email:"qqq@qqq.com",
      password: "password"
    })
    .expect(201);

  expect(resp.get("Set-Cookie")).toBeDefined();

  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);

  // console.log(response.get("Set-Cookie"));
  expect(response.get("Set-Cookie")[0]).toEqual(
    "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
