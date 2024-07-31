import { Request, Response } from 'express';
import { Book } from '../database';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json('Error while getting books');
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
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findOneAndDelete({ id: id });
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log('Error while deleting a Book:', error);
    res.status(500).json({ message: 'Error while deleting a Book', error });
  }
};
