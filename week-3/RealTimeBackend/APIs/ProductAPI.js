import express from 'express'
import {ProductModel} from '../models/ProductModel.js'
// creating mini express application

export const productApp = express.Router();


productApp.post('/products',async(req,res)=>{
    // getting the new product from the req body
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct);
    await newProductDoc.save();
    res.status(201).json({message:"product saved Successfully",payload:newProductDoc});
})

// get request to get all the products
productApp.get('/products',async(req,res)=>{
    let productList = await ProductModel.find();
    res.status(200).json({message:"products",payload:productList})
})

// get with id
productApp.get('/products/:id',async(req,res)=>{
    let givenId = req.params.id;
    let findProduct = await ProductModel.findById(givenId);
    res.status(200).json({message:"product by id",payload:findProduct})
})

// update with id

productApp.put('/products/:id',async(req,res)=>{
    // extract id
    let givenId = req.params.id;
    let newProduct = req.body;
    let latestObj = await ProductModel.findByIdAndUpdate(givenId,{$set:{...newProduct}},{new:true})
    res.status(200).json({message:"updated the product",payload:latestObj})
})

// getting the product using pid
productApp.get('/products/pid/:id',async(req,res)=>{
    let givenPID = req.params.id;
    console.log(givenPID)
    // let findObj = ProductModel.findById(givenPID);
    // console.log(findObj);
    // the above one is not working 
    // now let's try with our traditional approach
    let allProducts = await ProductModel.find();
    // console.log(allProducts)
    let findProduct =  allProducts.filter((obj)=>obj.pid===givenPID);
    console.log(findProduct);
})