import { randomUUID } from "crypto";
import { Schema ,model} from "mongoose";


export const productSchema=new Schema({
    _id:{type:String,default:randomUUID}
    ,name:{type:String,required:true}
   
    ,price:{type:Number,required:true}
   
    ,Ram:{type:String,required:true}
    ,Storage:{type:String,required:true}
    ,battery:{type:String,required:true}
    ,displaySize:{type:String,required:true}
    ,camera:{type:String,required:true}
    ,os:{type:String,required:true}
    ,color:{type:String,required:true}
    ,releaseDate:{type:Date,default:Date.now}
    
    ,image:{type:String,required:true}
    
  
    

})

export const productModel = model("products", productSchema);
