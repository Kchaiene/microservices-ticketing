import express from "express";
import {getTokenPayload} from "@kchaiene-corp/common";


const router = express.Router();


router.get("/api/users/currentuser", getTokenPayload, (req, res)=>{
  // console.log("Auth Server Current User ==>", req.headers);
  res.json(req.currentUser || null);
});


export {router as currentUserRouter};

