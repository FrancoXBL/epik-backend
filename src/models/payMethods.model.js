import mongoose from "mongoose";

const payMethodsSchema = new mongoose.Schema({
    payMethod: {
        type: String,
        required: true
    }
});

export default mongoose.model("PayMethods", payMethodsSchema);
