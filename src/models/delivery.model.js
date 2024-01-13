import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    minPayment:{
        type: Number,
        required: true
    }
});

export default mongoose.model("Delivery", deliverySchema);