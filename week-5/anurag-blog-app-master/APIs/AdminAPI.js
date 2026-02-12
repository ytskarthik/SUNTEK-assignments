import exp from 'express'
import { authenticate } from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const  adminRoute=exp.Router()

//Authenticate admin
adminRoute.post("/authenticate",async(req,res)=>{
    let admin=req.body
    let newadmin= await authenticate(admin)
     res.status(200).json({ message: "login success", payload: admin });
})
//Read all articles

adminRoute.get("/read-articles/:id",async(req,res)=>{
          let userid=req.params.id
          let user= await ArticleModel.findById(userid)
          console.log(user)
          
          
})

//Block 
adminRoute.post("/block",async(req,res)=>{
    const {userid,isActive}= req.body
    let user= await UserTypeModel.findByIdAndUpdate(userid,
        {
            $set:{isActive}
        },
        {new:true}

    )
    res.status(200).json({ message: "the user is blocked", payload: user });

})

// unblock user roles

adminRoute.post("/unblock",async(req,res)=>{
    const {userid,isActive}= req.body
    let user= await UserTypeModel.findByIdAndUpdate(userid,
        {
            $set:{isActive}
        },
        {new:true}

    )
    res.status(200).json({ message: "the user is unblocked", payload: user });

})