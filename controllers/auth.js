import { signupService,signInService } from "../services/auth.js"

export async function signupController(req,res){
    const data=req.body
     signupService(data.name,data.email,data.password).then((result)=>{
        res.send(result)
     }).catch((err)=>{
        res.send({message:err.message,failed:true})
     })
    
}
export async function signInController(req,res) {
   const data=req.body
   signInService(data.email,data.password).then((result)=>{
      res.send(result)
   
   }).catch((err)=>
 res.send({message:err.message,failed:true}))
}