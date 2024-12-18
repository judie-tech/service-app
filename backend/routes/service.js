import express from "express";
import {
  getCategories,
  getBusinesses,
  getBusinessById,
  createBusiness, // Import the createBusiness controller
} from "../controllers/serviceController.js";

const router = express.Router();

// Categories
router.get("/categories", getCategories);

// Businesses
router.get("/businesses", getBusinesses);
router.get("/businesses/:id", getBusinessById);

// Create a new business
router.post("/businesses", createBusiness);

export default router;
