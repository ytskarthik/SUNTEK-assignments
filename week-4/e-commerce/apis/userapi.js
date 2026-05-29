
    // userApi.js
    import exp from "express";
    import { UserModel } from "../module/usermodule.js";
    import { hash } from "bcryptjs";
    import { productModel } from "../module/productmodule.js";

    export const userApp = exp.Router();

    // POST /users - Create a new user
    userApp.post("/users", async (req, res, next) => {
        try {
            const newUser = req.body;

            // Run schema validators before save
            await new UserModel(newUser).validate();

            // Hash the password before storing
            const hashedPassword = await hash(newUser.password, 10);
            newUser.password = hashedPassword;

            // Create and save the new user document
            const newUserDocument = new UserModel(newUser);
            await newUserDocument.save();

            return res.status(201).json({ message: "User created successfully", payload: newUserDocument });
        } catch (err) {
            next(err);
        }
    });

    // GET /users - Get all users (with populated cart products)
    userApp.get("/users", async (req, res, next) => {
        try {
            const users = await UserModel.find().populate("cart.product");
            return res.json(users);
        } catch (err) {
            next(err);
        }
    });

    // GET /users/:id - Get a single user by id
    userApp.get("/users/:id", async (req, res, next) => {
        try {
            const id = req.params.id;
            const userObj = await UserModel.findById(id).populate("cart.product");
            if (!userObj) return res.status(404).json({ message: "User not found" });
            return res.status(200).json({ message: "user found", payload: userObj });
        } catch (err) {
            next(err);
        }
    });

    // PUT /user-cart/user-id/:uid/product-id/:pid - Add or increment product in user's cart
    userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res, next) => {
        try {
            const { uid, pid } = req.params;

            // Validate user exists
            const user = await UserModel.findById(uid);
            if (!user) return res.status(404).json({ message: "User not found" });

            // Validate product exists
            const product = await productModel.findById(pid);
            if (!product) return res.status(404).json({ message: "Product not found" });

            // Check if the product already exists in user's cart
            const productInCart = user.cart.find((item) => item.product.toString() === pid);

            if (productInCart) {
                // If exists, increment the quantity in-memory
                productInCart.quantity += 1;
            } else {
                // If not, push a new item with quantity 1
                user.cart.push({ product: pid, quantity: 1 });
            }

            // Save the modified user document and populate the cart
            let modifiedUser = await user.save();
            modifiedUser = await modifiedUser.populate("cart.product");

            return res.status(200).json({ message: "product added to cart", payload: modifiedUser });
        } catch (err) {
            next(err);
        }
    });

    // GET /compare/:pid - Compare provided product id with database id (returns simple result)
    userApp.get("/compare/:pid", async (req, res, next) => {
        try {
            const productId = req.params.pid;
            const prod = await productModel.findById(productId);
            if (!prod) return res.status(404).json({ message: "Product not found" });

            const equal = prod._id.toString() === productId;
            return res.json({ equal });
        } catch (err) {
            next(err);
        }
    })