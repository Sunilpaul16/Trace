import { Request, Response } from 'express';
import { Movie } from '../database';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send('Error while getting movies');
  }
};

export const postMovie = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const existingMovie = await Movie.findOne({ id: id });

    if (existingMovie) {
      return res.json({ 'Movie already exists in database': existingMovie });
    }
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send('Error while posting a movie');
  }
};
export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findOneAndDelete({ id: id });
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.log('Error while deleting a Movie:');
    res.status(500).json({ message: 'Error while deleting a Movie' });
  }
};
