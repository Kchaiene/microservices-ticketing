import React from "react";
import {servTicketing} from "../../api/build-client";
import StripeCheckout from "react-stripe-checkout";
import {UserContext} from "../../react-context/user-context";
import useGoodRequest from "../../hooks/useGoodRequest";
import axios from "axios";
import {consoleLogClient} from "../../utils/consoleMessage";
import Router from "next/router";



const SingleOrderPage = ({order}) => {
  const {currentUser} = React.useContext(UserContext);
  const [time, setTime] = React.useState(0);
  const [status, handleStripeToken] = useGoodRequest(onStripeToken);
  const {id:orderId, ticket={}, expiresAt} = order;
  const {loading, error, success} = status;
  const timerIdRef = React.useRef(null);


  React.useEffect(()=>{
    applyTimeLeft();
    timerIdRef.current = setInterval(applyTimeLeft, 1000);
    return ()=> clearInterval(timerIdRef.current);
  }, [order]);

  function applyTimeLeft () {
    const msLeft = new Date(expiresAt) - Date.now();
    setTime(Math.round(msLeft / 1000));
  }


  async function onStripeToken(token)  {
    const payload = { token:token.id, orderId } ;
    const {data} = await axios.post("/api/payments", payload);
    Router.push("/orders");
    // consoleLogClient("onStripeToken", data);
  }



  if (timerIdRef.current && time < 0 ) {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  }

  return (
    <>
      <h2>Order Page</h2>
      {time > 0 ?
        <>
          <div>Time left to pay: {time} seconds</div>
          <StripeCheckout
            token={handleStripeToken}
            stripeKey="pk_test_MIq8vQqDK1he0QInjUpaFEhS00yUKdm9bk"
            amount={ticket.price * 100}
            email={currentUser.email}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-info">{success}</div>}

        </> :
          <div>Order expired</div>
      }
    </>
  )
};



export async function getServerSideProps(ctx) {
  try {
    const {orderId} = ctx.query;
    const options = {headers: ctx.req.headers };
    const {data} = await servTicketing.get(`/api/orders/${orderId}`, options);
    return { props: {order:data} };
  } catch (e) {
    console.log("Error OrderPage ServerSide ==>", e.message);
    return { props: {} };
  }
}




export default SingleOrderPage;