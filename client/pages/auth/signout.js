import React from "react";
import useRequest from "../../hooks/useRequest";
import Router from "next/router";
import {UserContext} from "../../react-context/user-context";



const SignOutPage = () => {
  const {setState} = React.useContext(UserContext);

  const {doRequest} = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess:()=>{
      setState(null);
      Router.push("/");
    }
  });

  React.useEffect(()=>{
    console.log("SignOut Effect");
    doRequest();
  }, []);


  return (
    <>
      Signing you out...
    </>
  )
};


export default SignOutPage;