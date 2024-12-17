// Suggested code may be subject to a license. Learn more: ~LicenseLog:292136372.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4010108593.
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    unlist:{
        type:Boolean,
        default:false  
      },
    images: [{
        type: String,
        required: true
    }],
    quantity: {
        type: Number,
        required: true
    },
    totalRating:{
        type:Number,
        default:0,
    },
    noOfRating:{
        type:Number,
        default:0,
        required:false
    },
    salesVolume: {
        type: Number,
        default:0,
        required:false
    },
    createdAt: { type: Date, default: Date.now },
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const productModel = mongoose.model('Product',productSchema,'products');
export default productModel;
