import  {Router } from 'express'
import { signInController, signupController } from '../controllers/auth.js'

export const authRouter=Router()

authRouter.post("/signup",signupController)

authRouter.get("/hi",(req,res)=>{
    res.send('hii')
})
authRouter.post("/signin",signInController)


