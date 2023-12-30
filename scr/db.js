import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://xinzhaoigualorstein:aaaa@carnecitas.knyz404.mongodb.net/')
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}