import express from "express";
import dotenv from "dotenv";
// import connectDB from "./config/database";
import authRoutes from "./routes/auth.routes";
import testRoutes from "./routes/test.routes";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to DB

// (async function () {
//   await connectDB();
// })();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

export default app;
