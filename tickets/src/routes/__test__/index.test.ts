import request from "supertest";
import {app} from "../../app";
import {Ticket} from "../../models/Ticket";



const createTicket = async ({title, price}:{title:string; price:number}) => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signupTestAuto())
    .send({title, price})
    .expect(201);
};


it("fetch list of tickets", async()=>{
  await createTicket({title:"Title", price: 20});
  await createTicket({title:"Title-2", price: 30});
  await createTicket({title:"Title-3", price: 40});

  const resp = await request(app)
    .get("/api/tickets")
    .send()
    .expect(200);

  expect(resp.body.length).toEqual(3);
});



