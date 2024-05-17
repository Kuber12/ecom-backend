import mongoose, { model } from 'mongoose';

// Define the review schema
const reviewSchema = new mongoose.Schema({
    review_id: { type: Number, required: true, unique: true },
    product_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    star: { type: Number, required: true, min: 1, max: 5 },
    headline: { type: String, required: true },
    description: { type: String, required: true }
});

// Define and export the Review model
export const Review = model('Review', reviewSchema);
