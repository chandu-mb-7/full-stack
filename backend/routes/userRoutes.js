import express from "express";
import { saveUser, protectedRoute } from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save-user", verifyToken, saveUser);
router.get("/protected", verifyToken, protectedRoute);

export default router;
