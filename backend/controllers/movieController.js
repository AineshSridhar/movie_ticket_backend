import { getByTitle } from "@testing-library/dom";
import Movie from "../models/Movie";

export const getMovies = async(req, res) => {
    const movies = await Movie.find()
    res.json(movies);
}

export const addMovies = async(req, res) => {
    const {title, genre, duration, showtimes} = req.body;
    const newMovie = await Movie.create({title, genre, duration, showtimes});
    res.status(201).json(newMovie);
};

