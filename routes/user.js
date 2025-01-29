import express from "express"
 
import { getDashboard,getProducts } from "../controllers/user_controllers.js";
import { addToCart } from "../controllers/cart_controller.js";

const userRouter = express.Router();
//to fetch all products
userRouter.get('/getProduct',getProducts);
userRouter.get('/getusers',(req,res)=>{
    console.log("new call");
res.json({
    users:[
        {
            id: 1,
            name:"user 1",
        },
        {
            id: 2,
            name:"user 2",
        }, {
            id: 3,
            name:"user 3",
        } ,{
            id: 4,
            name:"user 4",
        },
        {
            id: 5,
            name:"user 5",
        }
    ]
});
});
//to fetch all category
 
userRouter.get('/getDashBoard',getDashboard);
userRouter.post('/addToCart',addToCart);
 
export default userRouter;