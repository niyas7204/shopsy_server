 
import productModel from '../models/product_model.js';
import categoryModel from '../models/category_model.js';


//To add new new Product
export const addProduct = async (req,res)=>{
    try {
        const {product_name,price,description,images,quantity,category}=req.body;
       const seller_id=req.user; 
     let product = productModel({
        product_name,
        price,
        description,
        images,
        quantity,
        seller_id,
        category
     });
   product=await product.save();
   res.status(200).json({message:"Success",product:product});
    } catch (error) {
        
        res.status(500).json({message:"Failure",error:error.message});
    }
}


//To fetch all Product
 export const getProduct= async (req,res)=>{
try {
    const product = await productModel.find({});
    res.status(200).json({message:"Success",products:product});
} catch (error) {
    res.status(500).json({message:"Failure",error:error.message});
}

 }



 //Delete a product
 export const deleteProduct= async (req,res)=>{
    try {
        const {id} = req.body;
        console.log('user id'+ id);
        const product=await productModel.findByIdAndDelete(id);

        if(!product)
{
    res.status(400).json({message:"Failure",error:"product not found"});
}         
        res.status(200).json({message:"Success",product:product});
    } catch (error) {
        res.status(500).json({message:"Failure",error:error.message});
    }
    
     }

     //create Product Category
    export const createCategory=async(req,res)=>{
     const   {name}=req.body;
     try {
const isExist = await categoryModel.findOne(name);
if(!isExist){
    let category=categoryModel({name});
    category=await category.save();
    res.status(200).json({message:"Success",});
}else{
    res.status(400).json({message:"Failure",error:"category already exist"});
}
 } catch (error) {
        res.status(500).json({message:"Failure",error:error.message});
     }
    }

    //Fetch all category
    export const getCategory = async (req,res)=>{
        try {
            const category = await categoryModel.find({});
            res.status(200).json({message:"Success",category:category});
            
        } catch (error) {
            res.status(500).json({message:"Failure",error:error.message}); 
        }
    }