import { randomUUID } from "crypto"
import {Schema,model} from "mongoose"

const tokenSchema = new Schema({
   _id:{type:String,default:randomUUID},
userId:{type:String, required:true, ref:'users'}
})

export const tokenModel=model('tokens',tokenSchema)