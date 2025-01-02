import express from "express"
 
import { getDashboard,getProducts ,addToCart} from "../controllers/user_controllers.js";

const userRouter = express.Router();
//to fetch all products
userRouter.get('/getProduct',getProducts);
//to fetch all category
 
userRouter.get('/getDashBoard',getDashboard);
userRouter.post('/addToCart',addToCart);
 
export default userRouter;