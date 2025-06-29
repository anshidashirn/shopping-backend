import { createProductService } from "../services/products.js";

export const createProductController = async (req, res) => {
    createProductService(req.body).then((result) => {
        res.send(result);
    
    }).catch((err)=>{
        res.send({ message: err.message, failed: true });
    })

}

