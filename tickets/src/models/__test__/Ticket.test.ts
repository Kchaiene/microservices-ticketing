import {Ticket} from "../Ticket";


it("Success Optimistic concurrency", async(done)=>{
  const ticket = Ticket.build({title:"Ticket", price: 20, userId:"123"});
  await ticket.save();

  const ticket_2 = await Ticket.findById(ticket.id);
  const ticket_3 = await Ticket.findById(ticket.id);

  ticket_2!.set({price: 2});
  ticket_3!.set({price: 3});

  await ticket_2!.save();

  try {
    await ticket_3!.save();
  } catch (e) {
    return done();
  }
  throw new Error("Error Optimistic concurrency");
});

it("Success Increment version number", async()=>{
  const ticket = Ticket.build({title:"Ticket", price: 20, userId:"123"});
  await ticket.save();
  expect(ticket.version).toEqual(0);

  ticket.set({price:1});
  await ticket.save();
  expect(ticket.version).toEqual(1);

  ticket.set({price:2});
  await ticket.save();
  expect(ticket.version).toEqual(2);
});

// it("VErsion test", async()=>{
//   const ticket = new Ticket({
//     title:"Ticket", price: 20, userId:"123", version: 2,
//   });
//   await ticket.save();
//   console.log("Version Test", ticket);
//
//   ticket.set({title:"Updated", version:10});
//   await ticket.save();
//   console.log("Version Test-2", ticket);
// });



