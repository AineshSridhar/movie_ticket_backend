import Booking from "../models/Booking.js";

export const bookTicket = async(req, res) => {
    const {movie, seats, showtime} = req.body;
    const userId = req.user.id;

    const ticket = await Booking.create({user: userId, movie, seats, showtime});

    res.status(201).json({message: "Booking successful", booking: newBooking});
};