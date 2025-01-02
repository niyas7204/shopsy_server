import mongoose from "mongoose";

topProductScema=mongoose.Schema({
    prouduct_id:{
        type:mongoose.Schema.Types.ObjectId,

        ref:"product",
        required:true,} ,
        total_sales:{
            type:Number,
            required:true,
        },
       
        createdAt: { type: Date, default: Date.now }, 
     
});

const topProducts = mongoose.model('topProducts',topProductScema,'top_products')
export default topProducts;