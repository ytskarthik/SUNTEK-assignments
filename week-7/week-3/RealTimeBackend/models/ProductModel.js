import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    pid:{
        type:Number,
        required:[true,"Pid is required"]
    },
    productName:{
        type:String,
        minLength:[3,"minimum length of product name is 3"],
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    }
},{
    strict:"throw",
    timestamps:true
})

export const ProductModel = model("product",productSchema)