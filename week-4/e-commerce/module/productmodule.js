import { Schema,model } from "mongoose";
const productschema= new Schema({
    productname:{
        type:String,
        required:true,
        minLength:[1,"length should me atleast 12 charecters"],
        maxLength:[30,"length should me atleast 12 charecters"]
    },
    brand:{
        type:String,
        required:true,
        minLength:[1,"length should me atleast 12 charecters"],
        maxLength:[10,"length should me atleast 12 charecters"]

    },
    price:{
        type:String,
        required:true,
        minLength:[1,"length should me atleast 12 charecters"],
        maxLength:[30,"length should me atleast 12 charecters"]

    }

})
export const productModel= model("product",productschema);