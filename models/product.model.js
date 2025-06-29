import { randomUUID } from "crypto";
import { Schema ,model} from "mongoose";
import { type } from "os";
import { features } from "process";

export const productSchema=new Schema({
    _id:{type:String,default:randomUUID}
    ,name:{type:String,require:true}
   
    ,price:{type:Number,require:true}
   
    ,Ram:{type:String,require:true}
    ,Storage:{type:String,require:true}
    ,battery:{type:String,require:true}
    ,displaySize:{type:String,require:true}
    ,camera:{type:String,require:true}
    ,os:{type:String,require:true}
    ,color:{type:String,require:true}
    ,releaseDate:{type:Date,default:Date.now}
    
    ,image:{type:String,require:true}
    
  
    

})

export const productModel = model("products", productSchema);
