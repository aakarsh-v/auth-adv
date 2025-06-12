import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB connection error: ", error.message);
        process.exit(1); // status code 0 is success but 1 is failure
    }
}