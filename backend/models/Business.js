import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: { type: String, required: true },
  image: { type: String },
  provider: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

export default mongoose.model("Business", businessSchema);
