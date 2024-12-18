import Booking from "../models/booking.js";
import Business from "../models/Business.js";

// Create a new booking
const createBooking = async (req, res, next) => {
  try {
    const { businessId, date, time } = req.body;

    // Log the received data to verify it
    console.log("Received Booking Data:", { businessId, date, time });

    // Check if the business exists
    const business = await Business.findById(businessId);
    if (!business)
      return res.status(404).json({ message: "Business not found" });

    // Check for double booking (if the time slot is already booked)
    const existingBooking = await Booking.findOne({
      business: businessId,
      date,
      time,
    });
    if (existingBooking)
      return res.status(400).json({ message: "Time slot already booked" });

    // Create the booking
    const booking = await Booking.create({
      user: req.user._id,
      business: businessId,
      date,
      time,
    });

    res.status(201).json(booking);
  } catch (error) {
    next(error); // Forward any error to the error handling middleware
  }
};

// Fetch all bookings for the logged-in user
const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("business", "name location provider")
      .sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    next(error); // Forward any error to the error handling middleware
  }
};

// Update booking status
const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Only allow status updates (don't update other fields)
    booking.status = req.body.status || booking.status;
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (error) {
    next(error); // Forward any error to the error handling middleware
  }
};

export { createBooking, getBookings, updateBooking };
