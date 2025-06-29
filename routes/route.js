import { authRouter } from "./auth.route.js"
import { productRouter } from "./product.route.js"

export const routes=[
    {path:'/auth', router : authRouter},
    {path:'/products', router : productRouter}
]