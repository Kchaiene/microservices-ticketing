import React from "react";
import {UserContext} from "../react-context/user-context";
import {servTicketing} from "../api/build-client";
import Link from "next/link";
import {consoleLogClient} from "../utils/consoleMessage";



const Home = ({tickets}) => {
  const {currentUser} = React.useContext(UserContext);
  const {email} = currentUser || {};
  // console.log("Home Render", currentUser );

  const showTickets = tickets => tickets.map(ticket => Boolean(ticket) &&
    <tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>{ticket.price}</td>
      <td>
        <Link href={`/tickets/[ticketId]`} as={`/tickets/${ticket.id}`}><a>View</a></Link>
      </td>
    </tr> );


  return (
    <div className="container">
      <h1 className="text-center">Home</h1>
      <h4>{email ? "Your are signed in" : "You are NOT signed in"}</h4>
      <p>Email: {email}</p>

      <div>
        <h2 className="text-center">Tickets</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {tickets && showTickets(tickets)}
          </tbody>
        </table>
      </div>
    </div>
  )
};


export async function getServerSideProps(ctx) {
  // consoleLogClient("Home ServerProps");
  try {
    const options = {headers: ctx.req.headers };
    // const {data} = await servTicketing.get("/api/users/currentuser", options);
    // return {props:{currentUser: data}}
    const {data} = await servTicketing.get("/api/tickets", options);
    return {props:{tickets: data}}
  } catch (e) {
    console.log("Error Home ServerSide ==>", e.message);
    return {props:{}}
  }
}


export default Home;
