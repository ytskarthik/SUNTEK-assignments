import exp from "express";
import { register, authenticate } from "../services/authService.js";

export const userRoute = exp.Router();

//Authenticate user
userRoute.post("/authenticate", async (req, res) => {
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
});

//Read all articles(protected route)
//Add comment to an article(protected route)
