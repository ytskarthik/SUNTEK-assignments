import exp from "express"
export const commonRouter=exp.Router()
import { register,authenticate } from "../services/authService.js";


//login
commonRouter.post("/login",async(req,res)=>{
     //get user obj from req
      let userObj = req.body;
      //call register
      const newUserObj = await register({ ...userObj, });
      //send res
      res.status(201).json({ message: "authroe created", payload: newUserObj });
    });

//logout
commonRouter.post("/logout",async(req,res)=>{

})
    

//logout
commonRouter.post('/logout', (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie('token', {
    httpOnly: true, // Must match original  settings
    secure: false,   // Must match original  settings
    sameSite: 'lax' // Must match original  settings
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
});

