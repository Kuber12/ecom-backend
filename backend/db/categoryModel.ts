import mongoose, { model } from 'mongoose';

// Define the category schema
const categorySchema = new mongoose.Schema({
    category_name: { type: String, required: true, unique: true },
    total_items: { type: Number, required: true }
});

// Define and export the Category model
export const Category = model('Category', categorySchema);
