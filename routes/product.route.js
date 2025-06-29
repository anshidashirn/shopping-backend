import { Router } from "express";
import { createProductController } from "../controllers/product.js";
import multer from "multer";
const upload = multer({ dest: './uploads' });

export const productRouter=Router()
productRouter.post("/",upload.single('file'), createProductController);