import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  deleteProperty,
  updateProperty,
} from "../controllers/PropertyController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createProperty);

router.get("/", getAllProperties);

router.get("/:id", getPropertyById);

router.put("/:id", verifyToken, updateProperty);

router.delete("/:id", verifyToken, deleteProperty);

export default router;
