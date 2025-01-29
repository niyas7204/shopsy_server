import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
products:[
    {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",  
            required: true,
        },
        quantity:{
            type:Number,
            required:true,
            min:1,
        }

    }
],
cartTotal:{
    type:Number,
    default:0,
         
},
customerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
}
}) ;

const cartModel = mongoose.model('Cart',cartSchema);
export default cartModel;