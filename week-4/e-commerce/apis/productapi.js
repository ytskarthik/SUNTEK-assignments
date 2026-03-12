import exp from "express"
export const prodApp = exp.Router()
import { productModel } from "../module/productmodule.js"

//route to create new product
prodApp.post("/products",async(req,res)=>{
    try{
    //get product from req
    console.log("Request body:", req.body)
    let ProductObjt=req.body
    //create new product document
    let productDoc= new productModel(ProductObjt);
    //save
    const saved = await productDoc.save();
    // return created product
    res.status(201).json({ message: "New product created", payload: saved });
    }catch(err){
        console.log("Error saving product:", err)
        res.status(500).send({error: err.message})
    }
})


prodApp.get('/products',async(req,res)=>{
    //get the products from db
    let products=await productModel.find()
    //send response
    res.status(200).json({message:"products",products})
});
