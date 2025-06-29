import { error } from "console";
import { generateToken } from "../libs/token.js";
import { userModel } from "../models/users.model.js";

export async function signupService(name, email, password) {
   
   const user =await userModel.findOne({email:email})
   if (user){
    throw new Error("user already exist")
   } 
   
   const userData= await userModel.create({
        name:name,
        email:email,
        password:password
    }
       
    )
const token=await generateToken(userData._id)


    return {message:"user created succesfully",token}
}

export async function signInService(email,password) {
   
    const user =await userModel.findOne({email,password})
    if (user){
        const token=await generateToken(user._id)
        console.log(token)
        return{message:"user logged in succesfully",token}

    }
    else{
        throw new Error('invalid email or password')
    }
    
}

export async function getMeServices(userId) {
     const user =await userModel.findById(userId).select('-password -__v')
     return {user, message:"user fetched"}
}