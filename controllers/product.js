import { createProductService } from "../services/products.js";


export const createProductController = async (req, res) => {
    if (req.user.type !== "admin") {
        res.send({ message: "you are not authorized to create product", failed: true });
    return}
    createProductService(req.body).then((result) => {
        res.send(result);
    
    }).catch((err)=>{
        res.send({ message: err.message, failed: true });
    })

}

