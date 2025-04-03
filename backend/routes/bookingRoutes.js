import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {bookTicket} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", authMiddleware, bookTicket);

export default router;
