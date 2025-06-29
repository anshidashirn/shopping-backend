import express, { Route, Router } from 'express'
import { routes } from "./routes/route.js"
import { connectDatabase } from './libs/db.config.js'
import { signupService } from './services/auth.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors({origin:'*'}))



routes.forEach((route) => {
    app.use(route.path, route.router)
})

connectDatabase().then(() => {
    console.log("database connected")
    //  signupService("asda","aas@gmail.com","as@122")
    app.listen(9000, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("server started")
    })

})
