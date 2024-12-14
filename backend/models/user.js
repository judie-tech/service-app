import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  console.log("Salt generated:", salt);
  this.password = await bcrypt.hash(this.password, salt);
  console.log("Password hashed:", this.password);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
