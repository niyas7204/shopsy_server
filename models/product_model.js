// Suggested code may be subject to a license. Learn more: ~LicenseLog:292136372.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4010108593.
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product_name: {
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
    images: [{
        type: String,
        required: true
    }],
    quantity: {
        type: Number,
        required: true
    },
    seller_id:{
        type: String,
        required: true
    }
    // seller_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

const productModel = mongoose.model('Product',productSchema);
export default productModel;
