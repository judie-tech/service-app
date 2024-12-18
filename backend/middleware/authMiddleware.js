import jwt from "jsonwebtoken";
import User from "../models/user.js"; // Make sure you import with the correct case ('User')

const protect = async (req, res, next) => {
  let token;

  // Log the Authorization header to verify the token is passed
  console.log("Authorization Header:", req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token

      // Log the token being used for verification
      console.log("Token:", token);

      // Verify the token with the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded); // Log the decoded token

      // Find the user by ID and exclude password field from response
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        // If the user doesn't exist in the DB
        return res.status(404).json({ message: "User not found" });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      // Log and return error if token verification fails
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // If token is not found in the header
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };
