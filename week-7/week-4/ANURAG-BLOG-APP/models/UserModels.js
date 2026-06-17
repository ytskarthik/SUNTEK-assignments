import { Schema,model } from "mongoose";


const userSchema =new Schema({
    firstName:{
        type:String,
        required:[true, "First name is required"]
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, "password name is required"]
    },
    profileImageUrl:{
        type:String,
    },
    role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],
        required:[true,"{value} is an invalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{
    timestamp:true,
    strict:"throw",
    versionKey:false

})

export const UserType09Model=model("user",UserModel)