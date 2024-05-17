import mongoose, { model } from 'mongoose';

// Define the payment schema
const paymentSchema = new mongoose.Schema({
    payment_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    payment_method: { type: String, required: true },
    billing_address: { type: String, required: true },
    status: { type: String, required: true }
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});

// Define and export the Payment model
export const Payment = model('Payment', paymentSchema);
