import React from "react";
import {consoleLogClient} from "../../utils/consoleMessage";
import {useRouter} from "next/router";
import {servTicketing} from "../../api/build-client";
import useRequest from "../../hooks/useRequest";



const SingleTicketPage = ({ticket}) => {
  const router = useRouter();
  const {doRequest, errors} = useRequest({
    url: "/api/orders",
    method: "post",
    body: { ticketId:ticket.id },
    onSuccess: (order)=>{
      // consoleLogClient("OnSuccess", order);
      router.push("/orders/[orderId]", `/orders/${order.id}`);
    }
  });
  const {title, price} = ticket;
  // consoleLogClient("SingleTicketPage Render", router.query.ticketId);


  return (
    <>
      <h1>Ticket Details Page</h1>
      <div>
        <h4>{title}</h4>
        <p>Price: {price}</p>
        {errors}
        <button className="btn btn-primary" onClick={doRequest}>Purchase</button>
      </div>
    </>
  )
};


export async function getServerSideProps(ctx) {
  try {
    const {ticketId} = ctx.query;
    const options = {headers: ctx.req.headers };
    const {data} = await servTicketing.get(`/api/tickets/${ticketId}`, options);
    return { props: {ticket:data} };
  } catch (e) {
    console.log("Error SingleTicketPage ServerSide ==>", e.message);
    return { props: {} };
  }
}


export default SingleTicketPage;