//create mini express application app
import exp from 'express'
import { UserModel } from '../models/userModel.js';
export const UserApp=exp.Router();

//user api routes

//create user
UserApp.post("/users",async(req,res)=>{
    try{
        //get user data from req body
        const newUser=req.body;
        //create user doc
        const newUserDocument=new UserModel(newUser);
        //save new user
        let user=await newUserDocument.save();
        //send response
        res.status(201).json({message:"user created successfully",payload:user})
    }
    catch(err){
        res.status(500).json({message:"error in creating user",description:err.message})
    }
})
//read all users
UserApp.get("/users",async(req,res)=>{
    //get all users from db
    const usersList=await UserModel.find({status:true});
    //send response
    res.status(200).json({message:"users ",payload:usersList})
})
//read a user by id
UserApp.get("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //get user from db
    let user=await UserModel.findOne({_id:uid,status:true});
    //check user 
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send response
    res.status(200).json({message:"user found ",payload:user})
})
//soft delete a user  by id
UserApp.delete("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //delete user from db
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}});
    //check user
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send response
    res.status(200).json({message:"user deleted successfully"})
})

//activate user (change status to true)
//PUT (complete change )
//   PATCH when partial change (only one or two fields)
UserApp.patch("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //find user and change status to false
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true});
    //send response
    res.status(200).json({message:"user activated successfully",payload:user})
})



//update a user by id 
UserApp.put("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    
    //get updated user data from req body
    let updatedUser=req.body;
    //update user in db
    let user=await UserModel.findByIdAndUpdate(uid,updatedUser,{new:true});
    //send response
    res.status(200).json({message:"user updated successfully",payload:user})
})


