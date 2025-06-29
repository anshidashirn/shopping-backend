import { error } from "console";
import { generateToken } from "../libs/token.js";
import { userModel } from "../models/users.model.js";

export async function signupService(name, email, password) {
   
   const user =await userModel.findOne({email:email})
   if (user){
    throw new Error({messege:"user already exist"})
   } 
   
   const userData= await userModel.create({
        name:name,
        email:email,
        password:password
    }
       
    )
const token=generateToken(userData._id)


    return {messege:"user created succesfully",token}
}

export async function signInService(email,password) {
   
    const user =await userModel.findOne({email,password})
    if (user){
        const token=await generateToken(user._id)
        console.log(token)
        return{messege:"user logged in succesfully",token}

    }
    else{
        throw new error('invalid email or password')
    }
    
}

export async function getMeServices(userId) {
     const user =await userModel.findById({userId})
     return {user, message:"user fetched"}
}