import { Schema,model } from "mongoose";
 const usercommentSchma=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
    Comment:{
        type:string
    }

 })

 const articleScham=new Schema({
    author:{
        type:Schema.type.ObjectId,
        ref:"user",
        required:[true,"name  is required"]

    },

    title:{
        type:String,
        reqiured:[true,"title is required"]

    },
    category:{
        type:String,
        required:[true,"catogery is required"]

    },

    content:{
        type:String,
        required:[true,"content is requored"]
    },
    comments:[usercommentSchma],
    isArticleActive:{
        type:Boolean,
        default:true,
    }
 },
{
     timestamp:true,
    strict:"throw",
    versionKey:false
})

export const aritalTypeModel=model("article",articleSchema)