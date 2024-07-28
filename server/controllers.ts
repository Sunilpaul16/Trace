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
      return res.json({ 'Movie already exists in database': existingMovie });
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
      return res
        .status(200)
        .json({ 'Book already exists in database': existingBook });
    }
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ 'Error while posting a Book': error });
  }
};

export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ 'Error while getting games': error });
  }
};

export const postGame = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const existingGame = await Game.findOne({ id: id });

    if (existingGame) {
      return res.json({ 'Game already exists in database': existingGame });
    }

    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ 'Error while posting a Game': error });
  }
};
