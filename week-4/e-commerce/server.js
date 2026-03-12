import exp from 'express'
import { hash } from 'bcryptjs'
import { connect,Types } from 'mongoose'
import { userApp } from './apis/userapi.js'
import { prodApp } from './apis/productapi.js'

   
const app=exp()
app.use(exp.json())
app.use('/user-api',userApp)
app.use('/products-api',prodApp)

async function connectDB(){
    try{
   await connect('mongodb://localhost:27017/e-comdb')
    console.log("db connection is success");
//assign port
const port=5000;
app.listen(port,()=>console.log("server listening on 5000..."))


    }catch(err){
        console.log("err in db connection",err)
   // .then(()=>console.log("connected to db"))
    //.catch((err)=>console.log("error in the db connection",err))
    }
}
connectDB();