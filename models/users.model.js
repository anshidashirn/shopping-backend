import { randomUUID } from "crypto"
import { Schema, model } from "mongoose"

const usersSchema = new Schema({
    _id: { type: String, default: randomUUID },
    name: { type: String ,require: true },
    email: { type: String ,require: true },
    password: { type: String, require: true },
    type:{type:String,default:"user"}
})

export const userModel=model("users",usersSchema)