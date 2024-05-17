import mongoose, { Document } from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
    product_id: { type: Number, required: true, unique: true },
    category_id: { type: Number, required: true },
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true }
});

// Define and export the Product model
export const Product = mongoose.model("Product", productSchema);

