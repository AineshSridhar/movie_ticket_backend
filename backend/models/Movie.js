import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  showtimes: [{ type: String, required: true }], // e.g., ["10:00 AM", "2:00 PM"]
});

export default mongoose.model("Movie", movieSchema);
