import { productModel } from "../models/product.model.js"

export const createProductService=async(data)=>{
const product=await productModel.create(data)
return {message:"product created successfully", product}
} 