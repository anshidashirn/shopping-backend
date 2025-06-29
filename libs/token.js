import { tokenModel } from "../models/token.model.js";

export async function generateToken(userId){
    const token=await tokenModel.create({userId})
    return token._id
}

export async function validateToken(token) {
    const user=await tokenModel.findOne({_id:token}).populate('userId')
    return user
    
}