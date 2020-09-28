import express from "express";
import "express-async-errors";
import {json} from "body-parser";
import cookieSession from "cookie-session";

import {errorHandler, NotFoundError} from "@kchaiene-corp/common";
import {currentUserRouter} from "./routs/current-user";
import {signInRouter} from "./routs/signin";
import {signOutRouter} from "./routs/signout";
import {signUpRouter} from "./routs/signup";


const app = express();
process.on('SIGTERM', () => process.exit());

// middleware
app.set("trust proxy", true);
app.use(json());
app.use(cookieSession({
  signed: false, // disable encryption
  secure: process.env.NODE_ENV !== "test",
  httpOnly: true,
}));
// app.use(express.json())

//routes
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.get("/api/users/rrr", (req,res)=>{res.send("RRRghkg2")});

app.all("*", async ()=>{throw new NotFoundError(); });

app.use(errorHandler);

export {app}
