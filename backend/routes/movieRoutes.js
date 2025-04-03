import express from "express";
import {getMovies, addMovies} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", addMovies);

export default router;