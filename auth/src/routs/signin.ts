import express, {Request, Response} from "express";
import {body,} from "express-validator";
import {validateRequest, BadRequestError} from "@kchaiene-corp/common";
import {User} from "../models/User";
import {Password} from "../services/password";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/api/users/signin", [
    body("email").isEmail().withMessage("Email must be valid!"),
    body("password").trim().notEmpty().withMessage("Password must be applied!")
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {throw new BadRequestError("Invalid credentials");   }

    const isMatch = await Password.compare(existingUser.password, password);
    if (!isMatch) {throw new BadRequestError("Invalid credentials");   }

    const token = jwt.sign({userId: existingUser._id, email}, process.env.JWT_SECRET!);
    req.session = {jwt: token};
    // req.session.jwt = token;

    // console.log("SignIN", existingUser);
    res.status(200).send(existingUser);
});


export {router as signInRouter};

