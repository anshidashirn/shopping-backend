import { validateToken } from "../libs/token.js"

export async function authMiddleware(req, res, next) {
    const token = await req.headers.token
    console.log(token)
    if(token){
       const validate =await validateToken(token)
       if(validate===null){
       
         res.send({failed:true,message:"authentication failed"})
       }
    else{
         req.user= validate.userId
        next()
    }}
    else{
        res.send({failed:true,message:"authentication failed"})
    }
}