//create mini express application app
import exp from 'express'
import { UserModel } from '../models/UserModel.js';
import { ArticleModel } from '../models/ArticleModel.js';
import { upload } from '../config/multer.js';
import cloudinary from '../config/cloudinary.js';
import { uploadToCloudinary } from '../config/cloudinaryUpload.js';
import { register as registerService } from '../services/authService.js';
import { verifyToken } from '../middlewares/verifyToken.js';
export const UserApp=exp.Router();

//user api routes

//create user
UserApp.post("/users",upload.single("profileImageUrl"),async(req,res)=>{
    let cloudinaryResult;
    try{
        //get user data from req body
        let newUser=req.body;
        
                //  Step 1: upload image to cloudinary from memoryStorage (if exists)
                if (req.file) {
                    try {
                        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
                    } catch (uploadErr) {
                        // If Cloudinary credentials are missing/invalid, log and continue without failing registration
                        console.warn('Cloudinary upload failed, continuing without profile image:', uploadErr.message || uploadErr);
                        cloudinaryResult = null;
                    }
                }
        
        //add profileImageUrl
        if(cloudinaryResult?.secure_url){
          newUser.profileImageUrl = cloudinaryResult.secure_url;
        }
        
        //add role as USER
        newUser.role = "USER";

        // Use the register service to hash password and create user
        const createdUser = await registerService(newUser);
        //send response
        res.status(201).json({ message: "user created successfully", payload: createdUser });
    }
    catch(err){
        // Step 3: rollback if image was uploaded
        if (cloudinaryResult?.public_id) {
          await cloudinary.uploader.destroy(cloudinaryResult.public_id);
        }
        console.error("User registration error:", err);
        // Return detailed error for validation issues
        const errorMsg = err.errors ? Object.values(err.errors).map(e => e.message).join(', ') : err.message;
        res.status(500).json({message:"error in creating user",description: errorMsg, error: errorMsg})
    }
})
//read all users
UserApp.get("/users",async(req,res)=>{
    //get all users from db
    const usersList=await UserModel.find({status:true});
    //send response
    res.status(200).json({message:"users ",payload:usersList})
})
//read a user by id
UserApp.get("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //get user from db
    let user=await UserModel.findOne({_id:uid,status:true});
    //check user 
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send response
    res.status(200).json({message:"user found ",payload:user})
})

//add comment to an article (USER only)
UserApp.put("/articles", verifyToken("USER"), async (req, res) => {
    try {
        const { articleId, comment } = req.body;

        if (!articleId || !comment) {
            return res.status(400).json({ message: "articleId and comment are required" });
        }

        const article = await ArticleModel.findById(articleId);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        article.comments.push({
            user: req.user.userId,
            comment,
        });

        await article.save();

        const updatedArticle = await ArticleModel.findById(articleId)
            .populate("author", "firstName email")
            .populate("comments.user", "firstName email");

        res.status(200).json({ message: "Comment added successfully", payload: updatedArticle });
    } catch (err) {
        console.error("Error adding comment:", err);
        res.status(500).json({ message: "Failed to add comment", error: err.message });
    }
});
//soft delete a user  by id
UserApp.delete("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //delete user from db
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}});
    //check user
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send response
    res.status(200).json({message:"user deleted successfully"})
})

//activate user (change status to true)
//PUT (complete change )
//   PATCH when partial change (only one or two fields)
UserApp.patch("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    //find user and change status to false
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true});
    //send response
    res.status(200).json({message:"user activated successfully",payload:user})
})



//update a user by id 
UserApp.put("/users/:id",async(req,res)=>{
    //get user id from req params
    let uid=req.params.id;
    
    //get updated user data from req body
    let updatedUser=req.body;
    //update user in db
    let user=await UserModel.findByIdAndUpdate(uid,updatedUser,{new:true});
    //send response
    res.status(200).json({message:"user updated successfully",payload:user})
})


