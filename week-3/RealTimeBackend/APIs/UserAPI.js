import express from 'express';
import {UserModel} from '../models/UserModel.js'
export const userApp = express.Router();

// test routes
// userApp.get('/test',(req,res)=>{
//     res.json({message:"Test route"})
// })


// User API route


// Read user
userApp.get('/users',async(req,res)=>{
    // read users from database
    let usersList = await UserModel.find();
    res.status(200).json({message:"users",payload:usersList})
})

// Read user by objectID
userApp.get('/users/:id',async (req,res)=>{
    let givenId = req.params.id;

    let findObj = await UserModel.findById(givenId);
    // console.log(findObj);
    res.status(200).json({message:"user by id",payload:findObj})
})

// create user
userApp.post('/users',async(req,res)=>{
    // get new user from req
    let newUser = req.body;
    // console.log(newUser)
    // create a new user document
    let newUserDoc = new UserModel(newUser)
    // console.log(newUserDoc);
    await newUserDoc.save();
    res.status(201).json({message:"user Created"})
    
})
// update 
userApp.put('/users/:id',async(req,res)=>{
    // taking out the id object id from params
    
    let givenId = req.params.id;

    // get modified user from req
    let modifiedUser = req.body;
    // make update
    let latestUser = await UserModel.findByIdAndUpdate(givenId,{$set:{...modifiedUser}},{new:true,runValidators:true})

    // send res

    res.status(200).json({message:"user modified",payload:latestUser});

})
// delete
userApp.delete('/users/:id',async(req,res)=>{
    // get object id from url params
    let givenId = req.params.id;
    let deletedUser = await UserModel.findByIdAndDelete(givenId);
    res.status(200).json({message:"user removed",payload:deletedUser});
})