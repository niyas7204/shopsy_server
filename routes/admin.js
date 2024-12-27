import express from 'express';
import { addProduct, getProduct,deleteProduct,createCategory,getCategory } from '/home/user/shopsy/controllers/product_conrollers.js';

const adminRouter=express.Router();

adminRouter.post('/addProduct',addProduct)
adminRouter.get('/getProduct',getProduct);
adminRouter.post('/deleteProduct',deleteProduct);
adminRouter.get('/getCategory',getCategory);
adminRouter.post('/createCategory',createCategory);
export default adminRouter;