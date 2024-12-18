import express from "express";
import {
  createBooking,
  getBookings,
  updateBooking,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new booking
router.post("/", protect, createBooking);

// Fetch all bookings for a user
router.get("/", protect, getBookings);

// Update booking status
router.put("/:id", protect, updateBooking);

export default router;
