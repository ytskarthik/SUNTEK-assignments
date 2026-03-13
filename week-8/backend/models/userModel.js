import mongoose from "mongoose";
import { Schema,model } from "mongoose";
//create a user schema with validations
//name,email,dob,mobile number
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"Date of birth is required"]
    },
    mobileNumber:{
        type:Number,
    },
    //for soft delete
    status:{
            type:Boolean,
            default:true
        }
},{
        timestamps:true,
        versionKey:false,
        strict:"throw",
    },)
//create user model for userschema'
export const UserModel=model("user",userSchema)
