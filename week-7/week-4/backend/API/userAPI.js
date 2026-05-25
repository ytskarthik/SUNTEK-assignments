//userAPI.js
//create a mini express application to avoid multiple exprsss applications
import exp from 'express'
export const userApp=exp.Router()
//Create USER API(request handler)
let users = [];
//get request handling read users
userApp.get('/users',(req,res)=>{
    //send response to the client
    //send users data in res
    res.status(200).json({message:"all users", payload: users});//message payload
})

//post request handling create user
userApp.post('/users',(req,res)=>{
    //send response to the client
    let newUser = req.body;
    //console.log("new user data", newUser);
    //insert newUser into users array
    users.push(newUser);
    res.status(201).json({message:"user created",payload:users});//status code 201 is denoting for created
    
})

//put request handling update user
userApp.put('/users/',(req,res)=>{
    //send response to the client
    //get modified user data from req body
    let modifiedUser = req.body;
    console.log("modified user data", modifiedUser);
    //find the user exists in array
    let userIndex=users.findIndex((userObj)=> userObj.id===modifiedUser.id);
    if(userIndex===-1){
        return res.status(404).json({message:"user not found"});
    }
        //user found update the user data
        let deteledUsers=users.splice(userIndex,1,modifiedUser);
        //send response as user modified
        res.status(200).json({message:"user modified"});
    }    
)

//read a user by id
userApp.get('/users/:id',(req,res)=>{   //:id is a route parameter
    console.log(req.params); 
    //read id from route parameter
    let userId=Number(req.params.id);      //{id: '100'}
    //read user by this id
    let user=users.find((user)=> user.id===userId);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    //send res
    res.status(200).json({message:"user", payload:user});//message payload
}
)

//delete request handling delete user
userApp.delete('/users/:id',(req,res)=>{

    //send response to the client
    let userId=Number(req.params.id);
    //find the user exists in array
    let userIndex=users.findIndex((userObj)=> userObj.id===userId);
    if(userIndex===-1){
        return res.status(404).json({message:"user not found"});
    }
        //user found delete the user data
        let deteledUsers=users.splice(userIndex,1);
        //send response as user deleted
        res.status(200).json({message:"user deleted", payload:deteledUsers});
})