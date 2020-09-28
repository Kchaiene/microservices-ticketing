import {Ticket} from "../Ticket";




it("VErsion test", async(done)=>{
  const ticket = new Ticket({
    title:"Ticket", price: 20, userId:"123", version: 2,
  });
  await ticket.save();
  // console.log("Version Test - create", ticket);

  ticket.set({title:"Updated = 10", version:10});
  await ticket.save();
  // console.log("Version Test-2", ticket);

  ticket.set({title:"Updated = 11", version:11});
  await ticket.save();
  // console.log("Version Test-3", ticket);

  ticket.set({title:"Updated = 5", version:5});
  try {
    await ticket.save();
  } catch (e) {
    const ticketResult = await Ticket.findById(ticket.id);
    // const {id} = ticket;
    // const {id2} = ticketResult!.id;
    // console.log("Version Test-Catch - 2", id, id2);

    // console.log("Version Test-Catch", ticketResult, e.message);
    return done();
  }
  throw new Error("Error version test");

  // expect(async()=>{
  //   await ticket.save();
  // }).toThrow();
});


// it("doc values", async(done)=> {
//   const ticket = new Ticket({
//     id:"Ticket-Id", title: "Ticket", price: 20, userId: "123", version: 2,
//   });
//   await ticket.save();
//
//   console.log("RRR", ticket);
// });


