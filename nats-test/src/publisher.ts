import nats from "node-nats-streaming";
import {TicketCreatedPublisher} from "./events/ticked-created-publisher";
// console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222"
});

stan.on("connect", async ()=>{
  console.log("Publisher connected to Nats");

  const publisher = new TicketCreatedPublisher(stan);
  await publisher.publish({
    id:"234",
    title: "Ticket",
    price: 20
  });

});


