import { BACKEND_URL } from '../config';
import { Game } from './typesFile';

export const fetchGames = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/games/popular`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error fetching games:', error);
  }
};

export const fetchGameDetail = async (id: number): Promise<Game> => {
  try {
    const response = await fetch(`${BACKEND_URL}/games/detail/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Failed to fetch game details:', error);
    throw error;
  }
};

export const getMyGames = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/games`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error getting Games', error);
    throw error;
  }
};

export const postMyGame = async (game: Game) => {
  try {
    const response = await fetch(`${BACKEND_URL}/games`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error creating Game', error);
    throw error;
  }
};

export const deleteGameFromMyGames = async (id: number) => {
  try {
    const response = await fetch(`${BACKEND_URL}/games/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    console.log('Error deleting Game', error);
    throw error;
  }
};
