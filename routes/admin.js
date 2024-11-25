import express from 'express';
import { addProduct } from '/home/user/shopsy/controllers/admin_conrollers.js';

const adminRouter=express.Router();

adminRouter.post('/addProduct',addProduct)


export default adminRouter;