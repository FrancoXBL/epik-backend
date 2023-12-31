import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
});

export default mongoose.model("Stock", stockSchema);