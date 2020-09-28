import React from "react";
import {servTicketing} from "../../api/build-client";



const OrdersListPage = ({ orders }) => {

  const showOrders = orders => orders.map(order=> Boolean(order) &&
    <li key={order.id}>
      {order.ticket.title} - {order.status}
    </li> );


  return (
    <div className="container">
      <h2 className="text-center">Orders List </h2>
      <ul>
        {orders && showOrders(orders)}
      </ul>
    </div>
  )
};



export async function getServerSideProps(ctx) {
  try {
    const options = {headers: ctx.req.headers };
    const {data} = await servTicketing.get("/api/orders", options);
    return {props:{orders: data}}
  } catch (e) {
    console.log("Error OrderList ServerSide ==>", e.message);
    return {props:{}}
  }
}


export default OrdersListPage;