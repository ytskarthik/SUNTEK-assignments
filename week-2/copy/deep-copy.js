const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 1️⃣ Create a deep copy using structuredClone (modern JS) or JSON method
const deepCopy = structuredClone(order); // or: JSON.parse(JSON.stringify(order))

// 2️⃣ Modify copied object
deepCopy.customer.address.city = "Bangalore";
deepCopy.items[0].price = 65000;

// 3️⃣ Log both objects
console.log("Original Order:", order);
console.log("Deep Copy:", deepCopy);
