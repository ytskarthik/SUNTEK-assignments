import { Schema,model } from "mongoose";


const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'
       
    },
    quantity:{
        type:Number,
        default:1,
    }
});

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    cart:{
        type:[cartSchema],
    },
});

export const UserModel=model("user",userSchema)