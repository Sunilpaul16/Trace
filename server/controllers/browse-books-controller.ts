import { Request, Response } from 'express';

const BOOKS_BASE = 'https://www.googleapis.com/books/v1/volumes';

const apiKey = () => {
  const key = process.env.BOOK_API_KEY;
  if (!key) throw new Error('BOOK_API_KEY is not set');
  return key;
};

export const getPopularBooks = async (_req: Request, res: Response) => {
  try {
    const response = await fetch(
      `${BOOKS_BASE}?q=subject:fiction&orderBy=relevance&maxResults=10&key=${apiKey()}`
    );
    if (!response.ok) throw new Error(`Google Books ${response.status}`);
    const data = await response.json() as { items: unknown[] };
    res.json(data.items ?? []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular books' });
  }
};

export const getBookDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${BOOKS_BASE}/${id}?key=${apiKey()}`);
    if (!response.ok) throw new Error(`Google Books ${response.status}`);
    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book detail' });
  }
};

export const searchBooks = async (req: Request, res: Response) => {
  const q = String(req.query.q ?? '');
  if (!q) return res.json([]);
  try {
    const response = await fetch(
      `${BOOKS_BASE}?q=${encodeURIComponent(q)}&key=${apiKey()}`
    );
    if (!response.ok) throw new Error(`Google Books ${response.status}`);
    const data = await response.json() as { items?: unknown[] };
    res.json(data.items ?? []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search books' });
  }
};
