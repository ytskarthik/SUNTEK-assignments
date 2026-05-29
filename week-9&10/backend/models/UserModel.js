import mongoose from "mongoose";
import { Schema,model } from "mongoose";
//create a user schema with validations
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"]
    },
    lastName:{
        type:String,
        required:[true,"Last name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    profileImageUrl:{
        type:String,
        default:null
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        default:"USER"
    },
    isActive:{
        type:Boolean,
        default:true
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
export const UserModel = mongoose.models.users || model("users",userSchema)
