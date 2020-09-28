import express from "express";
import "express-async-errors";
import {json} from "body-parser";
import cookieSession from "cookie-session";

import {errorHandler, getTokenPayload, NotFoundError} from "@kchaiene-corp/common";
import {createTicketRouter} from "./routes/new";
import {showTicketRouter} from "./routes/show";
import {indexTicketRouter} from "./routes";
import {updateTicketRouter} from "./routes/update";


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
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all("*", async ()=>{throw new NotFoundError(); });

app.use(errorHandler);

export {app}
