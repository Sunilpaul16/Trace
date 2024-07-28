import { Request, Response } from 'express';
import { Game } from '../database';

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

export const deleteGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedGame = await Game.findOneAndDelete({ id: Number(id) });
    if (!deletedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json({ message: 'Game successfully deleted', game: deletedGame });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting game', error });
  }
};
