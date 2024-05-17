import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    image_url: { type: String, default: false },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    verified: { type: Boolean, default: false },
    acc_status: { type: String, default: "active" },
    user_role: { type: String, default: "customer" }
});

// Define and export the Customer model
export const Customer = mongoose.model("Customer", customerSchema);
