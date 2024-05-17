import mongoose, { model } from 'mongoose';

// Define the comment schema
const commentSchema = new mongoose.Schema({
    comment_id: { type: Number, required: true, unique: true },
    product_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    text: { type: String, required: true }
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});

// Define and export the Comment model
export const Comment = model('Comment', commentSchema);
