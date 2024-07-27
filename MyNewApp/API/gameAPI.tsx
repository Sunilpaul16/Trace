import { MY_Game_API_KEY } from '../config';

const API_KEY = MY_Game_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const fetchGames = async () => {
  try {
    const response = await fetch(POPULAR_API_URL);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchGameDetail = async (id: any) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch movie details:', error);
    throw error;
  }
};
const API = `http://10.0.2.2:3000/games`;

export const getMyGames = async () => {
  try {
    const response = await fetch(API);
    return await response.json();
  } catch (error) {
    console.log('Error getting Games', error);
  }
};

export interface Game {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
}

export const postMyGames = async (game: Game) => {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Error creating Game', error);
    throw error;
  }
};
