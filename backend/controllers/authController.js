import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Register request received:", name, email, password);

  // Validate input
  if (!name || !email || !password) {
    console.log("Invalid input:", name, email, password);
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Normalize email (lowercase and trim spaces)
    const normalizedEmail = email.toLowerCase().trim();

    console.log("Normalized email:", normalizedEmail);

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      console.log("User already exists:", normalizedEmail);
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Hashed password:", hashedPassword);

    // Create and save the user
    const user = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });
    await user.save();

    console.log("User registered:", user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login request received:", email, password);

  // Validate input
  if (!email || !password) {
    console.log("Invalid input:", email, password);
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Normalize email (lowercase and trim spaces)
    const normalizedEmail = email.toLowerCase().trim();

    console.log("Normalized email:", normalizedEmail);

    // Find the user by email
    const user = await User.findOne({ email: normalizedEmail });

    console.log("User found:", user);

    if (!user) {
      console.log("User not found:", normalizedEmail);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the entered password with the hashed password in DB
    const isValidPassword = await bcrypt.compare(password, user.password);

    console.log("Password valid:", isValidPassword);
    console.log("Password length:", password.length);
    console.log("Hashed password length:", user.password.length);

    if (!isValidPassword) {
      console.log("Invalid password:", password);
      console.log("Hashed password:", user.password);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1h" }
    );

    console.log("JWT token generated:", token);

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
