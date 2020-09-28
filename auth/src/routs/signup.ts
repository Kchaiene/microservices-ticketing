import express, {Request, Response} from "express";
import {body, } from "express-validator";
import {User} from "../models/User";
import {validateRequest, BadRequestError} from "@kchaiene-corp/common";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/api/users/signup", [
  body("email").isEmail().withMessage("Email must be valid!"),
  body("password").trim().isLength({min: 4, max: 20}).withMessage("Password must be between 4 and 20 characters!")
],
  validateRequest,
  async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {throw new BadRequestError("Email already in use");   }

    const newUser = User.build({email, password});
    await newUser.save();

    const token = jwt.sign({userId: newUser._id, email}, process.env.JWT_SECRET!);
    req.session = {jwt: token};
    // req.session.jwt = token;

    res.status(201).send(newUser);
});


export {router as signUpRouter};

