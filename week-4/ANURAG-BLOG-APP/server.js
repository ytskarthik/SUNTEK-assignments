import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { adminRoute } from './APIS/Adminapis.js'
import { authorRoute } from './APIS/Authorapi.js'
import { userRoute } from './APIS/Usersapi.js'


config()

let app=exp()
//add dody middleware
app.use(exp.json())

app.use('/use-api',userRoute)
app.use("/admin-api",adminRoute)
app.use('/author-api',authorRoute)

//connect to db
const connectdb= async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection success")
    //http port creation
    app.listen(process.env.PORT,()=>console.log("port connected sucessfully"))
    }
    catch(err)
    {
        console.log("error",err)
    }


}
connectdb()
app.use((err,req,res,next)=>{
    console.log("error",err)
    res.json({message:"error",reason:err.massage})
})