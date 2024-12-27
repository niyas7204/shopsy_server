import mongoose from 'mongoose';

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:false,
        
    }

})
const categoryModel=mongoose.model('Category',categorySchema,'categories');
export default categoryModel;