import { Request, Response } from 'express';
import Movie from './database';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send('Error while getting movies');
  }
};

export const postMovie = async (req: Request, res: Response) => {
  const {
    id,
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    backdrop_path,
    runtime
  } = req.body;
  if (
    !id ||
    !title ||
    !release_date ||
    !vote_average ||
    !overview ||
    !poster_path ||
    !backdrop_path ||
    !runtime
  ) {
    return res.status(400).send({ message: 'Missing data' });
  }
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send('Error while posting a movie');
  }
};
