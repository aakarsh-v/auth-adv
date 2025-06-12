import express from "express";
import { connectDB } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()) // allows to parse incoming request in json payloads
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173", // replace with your frontend's URL and port
    credentials: true
}));

app.get('/', (req, res) => {
    res.send("backend is runing!");
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log(`Backend is running on port: ${PORT}!`)
})
