import {
  GAME_API_KEY,
  PORT_GAMES,
  GAME_BASE_URL,
  GAME_ACCESS_TOKEN,
  PORT_GAMES_2
} from '../config';

export type Game = {
  id: number;
  name: string;
  cover?: {
    image_id: string;
  };
  aggregated_rating?: number;
  first_release_date?: number;
  summary?: string;
  storyline?: string;
  platforms?: { name: string }[];
  involved_companies?: { company: { name: string } }[];
  game_modes?: { name: string }[];
  rating_count?: number;
  total_rating_count?: number;
  screenshots?: { image_id: string }[];
  websites?: { category: number; url: string }[];
};
export const fetchGames = async () => {
  const currentDate = Math.floor(Date.now() / 1000);
  const oneYearAgo = currentDate - 365 * 24 * 60 * 60;
  try {
    const response = await fetch(GAME_BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': GAME_API_KEY,
        Authorization: `Bearer ${GAME_ACCESS_TOKEN}`
      },
      body: `fields name,cover.image_id,summary,aggregated_rating,first_release_date,platforms.name;
      where first_release_date > ${oneYearAgo}
      & aggregated_rating != null
      & cover != null;
      sort aggregated_rating desc;
      limit 100;`
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

export const fetchGameDetail = async (id: number): Promise<Game> => {
  try {
    const response = await fetch(GAME_BASE_URL, {
      method: 'POST',
      headers: {
        'Client-ID': GAME_API_KEY,
        Authorization: `Bearer ${GAME_ACCESS_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: `fields name,cover.image_id,aggregated_rating,first_release_date,
      summary,storyline,platforms.name,involved_companies.company.name,game_modes.name,
      rating_count,total_rating_count,websites.category,screenshots,websites.url; where id = ${id};`
    });
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorBody}`
      );
    }

    const games = await response.json();

    return games[0];
  } catch (error) {
    console.log('Failed to fetch game details:', error);
    throw error;
  }
};
export const getMyGames = async () => {
  try {
    const response = await fetch(PORT_GAMES);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Error getting Games', error);
    throw error;
  }
};

export const postMyGame = async (game: Game) => {
  try {
    const response = await fetch(PORT_GAMES, {
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

export const deleteGameFromMyGames = async (id: number) => {
  try {
    const response = await fetch(`${PORT_GAMES}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.log('Error deleting Game', error);
    throw error;
  }
};
