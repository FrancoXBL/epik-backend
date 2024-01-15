import mongoose from "mongoose";

const extrasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    serving:{
        type: String,
        required: true
    }
});

export default mongoose.model("Extras", extrasSchema);