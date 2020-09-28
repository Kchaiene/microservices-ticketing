import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "../react-context/user-context";
import {servTicketing} from "../api/build-client";
import Header from "../components/_App/Header";



const CustomApp = ({Component, pageProps, currentUser}) => {
  // console.log("Custom App Render", currentUser);
  return (
    <>
      <UserProvider currentUser={currentUser}>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
};


CustomApp.getInitialProps = async appContext => {
  let currentUser = null;
  if (appContext.ctx.req) {
    try {
      const options = {headers: appContext.ctx.req.headers };
      const {data} = await servTicketing.get("/api/users/currentuser", options);
      currentUser = data;
    } catch (e) {
      console.log("Error App Initial ==>", e.message);
    }
  }

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    try {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx, currentUser);
    } catch (e) {
      console.log("Error App Initial Props ==>", e.message);
    }
  }

  return {pageProps, currentUser}
};


export default CustomApp;