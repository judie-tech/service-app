import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./controllers/authController.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// API Routes
app.use("/api/auth", authRoutes); // Authentication routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
