import {Schema,model} from 'mongoose'

//  Create user schema (username,password,age)

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Username is Required"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[10,"MaxLength Exceeded"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less than 25"]
    }
},{
    strict:"throw",
    timestamps:true
});


// Create user model with that schema 
export const UserModel = model("user",userSchema)