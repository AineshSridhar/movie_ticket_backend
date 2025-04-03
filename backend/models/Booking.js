import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Movie",
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    showtime: {
        type: String,
        required: true
    }
})

export default mongoose.model("Booking", bookingSchema);