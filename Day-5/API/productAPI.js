//productAPI.js
import exp from 'express'
export const productApp=exp.Router()

let products = [];
//get products
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products", payload:products});
})
// get product by id
productApp.get('/products/:id', (req, res) => {
    let productId = Number(req.params.id);
    let product = products.find(prod => prod.id === productId);
    if (!product) {
        return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product found", payload: product });
});
//get product by brand
productApp.get('/products-name/:name',(req,res)=>{
    
})

//create product
productApp.post('/products',(req,res)=>{
    let newProduct=req.body;
    products.push(newProduct);
    res.status(201).json({message:"product created", payload:products});
})
//update product
productApp.put('/products/:id',(req,res)=>{
    let modifiedProduct=req.body;
    let productId=Number(req.params.id);
    let productIndex=products.findIndex((prod)=> prod.id===productId);
    if(productIndex===-1){
        return res.status(404).json({message:"product not found"});
    }
    products.splice(productIndex,1,modifiedProduct);
    res.status(200).json({message:"product modified", payload:products});
});
// delete product
productApp.delete('/products/:id', (req, res) => {
    let productId = Number(req.params.id);
    let productIndex = products.findIndex(prod => prod.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: "product not found" });
    }
    let deleted = products.splice(productIndex, 1);
    res.status(200).json({ message: "product deleted", payload: deleted[0] });
});