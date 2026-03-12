//server.js
//create a HTTP server
    //import express module

import exp from 'express'
import {userApp} from "./API/userAPI.js"
import { productApp } from './API/productAPI.js'
//create a HTTP server using express
const app = exp()
app.use(exp.json())//to parse json data in req body,built in middleware
//we have to assign a port number 
app.listen(3000,()=>{
    console.log("server is listening on port number 3000")
})
app.use('/user-api',userApp)
app.use('/prod-api',productApp)