import express from "express";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/test", protect, (req, res) => {
  res.json({ message: `Hello, ${req.user?.name}` });
});

export default router;
