import express from "express";
import dotenv from "dotenv";
// import connectDB from "./config/database";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import testRoutes from "./routes/test.routes";

dotenv.config();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Connect to DBS

// (async function () {
//   await connectDB();
// })();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

export default app;
