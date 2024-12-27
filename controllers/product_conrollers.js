 
import productModel from '../models/product_model.js';
import categoryModel from '../models/category_model.js';


//To add new new Product
export const addProduct = async (req,res)=>{
    try {
        const {productName,price,description,images,quantity}=req.body;
        const categoryName=req.headers["product_category"]
       const sellerId=req.user; 

       let selectedCategory=await categoryModel.findOne({name:categoryName});
       if(!selectedCategory){
        res.status(400).json({message:"Failure",error:"Category not found"});
       }
      console.log(selectedCategory);
     let category = selectedCategory._id;
     let product = productModel({
        productName,
        price,
        description,
        images,
        quantity,
        sellerId,
        category,
     });
   product=await product.save();
 product=await  product.populate('category','name');
   res.status(200).json( product);
    } catch (error) {
        
        res.status(500).json({message:"Failure",error:error.message});
    }
}


//To fetch all Product
 export const getProduct= async (req,res)=>{
try {
    const product = await productModel.find({})
    .populate('category','name') ;
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
        let product=await productModel.findByIdAndDelete(id);

        if(!product)
{
    res.status(400).json({message:"Failure",error:"product not found"});
}         
product = await product. populate('category','name');
        res.status(200).json(  product);
    } catch (error) {
        res.status(500).json({message:"Failure",error:error.message});
    }
    
     }

     //create Product Category
    export const createCategory=async(req,res)=>{
     const   {name}=req.body;
     try {
const isExist = await categoryModel.findOne({name:name});
if(!isExist){
    let category=categoryModel({name});
    category=await category.save();
    res.status(200).json({message:"Success",category:category});
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
            res.status(200).json({message:"Success",categories:category});
            
        } catch (error) {
            res.status(500).json({message:"Failure",error:error.message}); 
        }
    }