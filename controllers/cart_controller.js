import cartModel from "../models/cart_model.js";
import productModel from "../models/product_model.js";
import mongoose from "mongoose";

export const addToCart = async (req, res) => {
  try {
    console.log("add to category");
    const { productId, quantity } = req.body;
    console.log("product= " + productId + " quantity= " + quantity);

    if (!mongoose.Types.ObjectId.isValid(productId) || quantity < 1) {
      res.status(400).json({ message: "Invalid product or quantity" });
    }
    let cart = await cartModel.findOne({ customerId: req.user });

    if (!cart) {
      console.log("cart null");
      (cart = new cartModel({
        customerId: req.user,
        cartTotal: 0,
        products: [
          {
            product: productId,
            quantity: quantity,
          },
        ],
      })),
        cart.save();
      res.status(200).json({ message: "cart updated", product: cart.products });
    } else {
      console.log("cart not null");
      const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );
      if (productIndex >= 0) {
        console.log("product contains");
        cart.products[productIndex].quantity += quantity;
      } else {
        console.log("product not contains");
        const product = {
          product: new mongoose.Types.ObjectId(productId),
          quantity: quantity,
        };
        cart.products.push(product);
      }
    }
    const price = await productModel.findById(productId).select("price").exec();
    cart.cartTotal += (price.price * quantity);

    cart.save();
    res.status(200).json({ message: "cart updated", product: cart.products });
  } catch (error) {
    console.log("add to cart error " + error);
    res.status(500).json({ message: "Failure", error: error.message });
  }
};

export const emptyCart = async (req, res) => {
try {
  let cart = await cartModel.findOne({ customerId: req.user });
  cart.remove();
  res.status(200).json({message:"Cart removed succesfully"})
} catch (error) {
  res.status(500).json({ message: "Failure", error: error.message }); 
}
};
