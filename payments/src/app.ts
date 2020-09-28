import express from "express";
import "express-async-errors";
import {json} from "body-parser";
import cookieSession from "cookie-session";

import {errorHandler, getTokenPayload, NotFoundError} from "@kchaiene-corp/common";
import {createChargeRouter} from "./routes/new";



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
app.use(getTokenPayload);
// app.use(express.json())



//routes
app.use(createChargeRouter);

app.all("*", async ()=>{throw new NotFoundError(); });
app.use(errorHandler);

export {app}
