import express from 'express'
import { userApp } from './APIs/UserAPI.js'
import {connect} from 'mongoose'
import {productApp} from './APIs/ProductAPI.js'
const app = express();

const port = 4000;
// connect to db server
async function connectDB(){
    // connect('mongodb://localhost:27017')
    // .then(()=>console.log("a"))
    // .catch((err)=>console.log("b",err))
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("successfully connected to DB");
        app.listen(port,()=>{
        console.log("Server running at port 4000");
    })
        
    }
    catch(err){
        console.log("failed to connect with DB");
        
    }
    
}
connectDB();

app.use(express.json())
app.use('/user-api',userApp);
app.use('/product-api',productApp)


// error handling middleware

// function errorHandler(err,req,res,next){
//     res.json({message:"error",reason:err,message});
// }

// app.use(errorHandler)
// default error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err,message})
})