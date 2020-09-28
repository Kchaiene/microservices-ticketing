import request from "supertest";
import {app} from "../../app";



it("response with details about the current user", async()=> {
  const cookie = await global.signupTestAuto();

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  // console.log(response.body);
  expect(response.body.email).toEqual("qqq@qqq.com");
});

it("null response to no current user", async()=> {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body).toEqual(null);
});
