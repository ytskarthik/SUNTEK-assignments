/*ASSIGNMENT 1:
----------------------------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//1. Use filter() to get only inStock products
const inStockProducts=cart.filter(product=>product.inStock);
console.log(inStockProducts);
//2.Use map() to create a new array with:  { name, totalPrice }
const nameAndTotalPrice=inStockProducts.map(product=>{
    return{
        name:product.name,
        totalPrice:product.price*product.quantity
    }
});
console.log(nameAndTotalPrice); 
//3.Use reduce() to calculate grand total cart value
const grandTotal= nameAndTotalPrice.reduce((acc,product)=>acc+product.totalPrice,0);
console.log(grandTotal);
//4.Use find() to get details of "Mouse"
const mouseDetails=cart.find(product=>product.name==="Mouse");
console.log(mouseDetails);
//5.Use findIndex() to find the position of "Keyboard"
const keyboardIndex=cart.findIndex(product=>product.name==="Keyboard");
console.log(keyboardIndex);