
import categoryModel from '../models/category_model.js';
import productModel from '../models/product_model.js';
import userModel from '../models/user_model.js';
import mongoose from 'mongoose';

export const getDashboard = async (req,res)=>{
try {
    const categeries = await categoryModel.find({});
    res.status(200).json({message:"Success",categories:categeries,topMoving:[]});
} catch (error) {
    res.status(500).json({message:"Failure",error:error.message}); 
}
}

export const getProducts = async(req,res)=>{
    try{
        let categoryId=req.query.category??"";
        if(req.query.name==null){
            console.log(" name is null");  
        }
        let name = req.query.name ?? "";

let products;
        if(categoryId){
            categoryId = new mongoose.Types.ObjectId(categoryId);
            console.log("with name " +  name);

           products = await productModel.find({ category: categoryId,productName : new RegExp(name,'i')})
           .populate('category','name').lean() ;
        } else {

            console.log("with out category" )
                products = await productModel.find({$or:[{ productName : new RegExp(name,'i')},{'category.name': new RegExp(name, 'i')}]})
                .populate('category','name') ;
      
    }
 
    res.status(200).json({message:"Success",products:products});
}catch(error){
    res.status(500).json({message:"Failure",error:error.message});
}
}
