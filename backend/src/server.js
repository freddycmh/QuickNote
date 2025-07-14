import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 💡 Enable CORS first
app.use(cors({
  origin: "http://localhost:5173",
}));

// Middleware
app.use(express.json());

// 💡 Now apply the rate limiter
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
  });
});