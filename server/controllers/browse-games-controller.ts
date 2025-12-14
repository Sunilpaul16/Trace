import { Request, Response } from 'express';

const IGDB_URL = 'https://api.igdb.com/v4/games';

const igdbHeaders = () => {
  const clientId = process.env.GAME_API_KEY;
  const token = process.env.GAME_ACCESS_TOKEN;
  if (!clientId || !token) throw new Error('GAME_API_KEY or GAME_ACCESS_TOKEN is not set');
  return {
    Accept: 'application/json',
    'Client-ID': clientId,
    Authorization: `Bearer ${token}`,
  };
};

export const getPopularGames = async (_req: Request, res: Response) => {
  const oneYearAgo = Math.floor(Date.now() / 1000) - 365 * 24 * 60 * 60;
  try {
    const response = await fetch(IGDB_URL, {
      method: 'POST',
      headers: igdbHeaders(),
      body: `fields name,cover.image_id,summary,aggregated_rating,first_release_date,platforms.name;
      where first_release_date > ${oneYearAgo} & aggregated_rating != null & cover != null;
      sort aggregated_rating desc;
      limit 10;`,
    });
    if (!response.ok) throw new Error(`IGDB ${response.status}`);
    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular games' });
  }
};

export const getGameDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await fetch(IGDB_URL, {
      method: 'POST',
      headers: igdbHeaders(),
      body: `fields name,cover.image_id,aggregated_rating,first_release_date,
      summary,storyline,platforms.name,involved_companies.company.name,game_modes.name,
      rating_count,total_rating_count,websites.category,screenshots,websites.url;
      where id = ${id};`,
    });
    if (!response.ok) throw new Error(`IGDB ${response.status}`);
    const data = await response.json() as unknown[];
    res.json(data[0] ?? null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game detail' });
  }
};

export const searchGames = async (req: Request, res: Response) => {
  const q = String(req.query.q ?? '');
  if (!q) return res.json([]);
  try {
    const response = await fetch(IGDB_URL, {
      method: 'POST',
      headers: igdbHeaders(),
      body: `fields name,cover.image_id; search "${q}"; limit 10;`,
    });
    if (!response.ok) throw new Error(`IGDB ${response.status}`);
    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: 'Failed to search games' });
  }
};
