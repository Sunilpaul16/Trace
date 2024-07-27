import { Request, Response } from 'express';
import { Book, Game, Movie } from './database';

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
      return res.json({ message: 'Movie already exists in database' });
    }
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send('Error while posting a movie');
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send('Error while getting movies');
  }
};

export const postBook = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const existingBook = await Book.findOne({ id: id });

    if (existingBook) {
      return res.json({ message: 'Book already exists in database' });
    }
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send('Error while posting a Book');
  }
};

export const getGames = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send('Error while getting movies');
  }
};

export const postGame = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const existingGame = await Game.findOne({ id: id });

    if (existingGame) {
      return res.json({ message: 'Game already exists in database' });
    }
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).send(newGame);
  } catch (error) {
    res.status(500).send('Error while posting a Game');
  }
};
