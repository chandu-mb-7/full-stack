import express from "express";
import { saveUser, loginUser, checkUserExists } from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save-user", verifyToken, saveUser);

router.post("/login", verifyToken, loginUser);

router.get("/check-user", verifyToken, checkUserExists);

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

export default router;
