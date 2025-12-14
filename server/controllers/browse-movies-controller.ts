import { Request, Response } from 'express';

const TMDB_BASE = 'https://api.themoviedb.org/3';

const apiKey = () => {
  const key = process.env.MOVIE_API_KEY;
  if (!key) throw new Error('MOVIE_API_KEY is not set');
  return key;
};

export const getPopularMovies = async (_req: Request, res: Response) => {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/popular?api_key=${apiKey()}&language=en-US&page=1`
    );
    if (!response.ok) throw new Error(`TMDB ${response.status}`);
    const data = await response.json() as { results: unknown[] };
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
};

export const getMovieDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${TMDB_BASE}/movie/${id}?api_key=${apiKey()}`);
    if (!response.ok) throw new Error(`TMDB ${response.status}`);
    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie detail' });
  }
};

export const searchMovies = async (req: Request, res: Response) => {
  const q = String(req.query.q ?? '');
  if (!q) return res.json([]);
  try {
    const response = await fetch(
      `${TMDB_BASE}/search/movie?api_key=${apiKey()}&query=${encodeURIComponent(q)}`
    );
    if (!response.ok) throw new Error(`TMDB ${response.status}`);
    const data = await response.json() as { results: unknown[] };
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search movies' });
  }
};
