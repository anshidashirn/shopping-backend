import { Router } from "express";
import { createProductController } from "../controllers/product.js";

export const productRouter=Router()
productRouter.post("/", createProductController);