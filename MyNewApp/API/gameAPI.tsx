import {
  GAME_API_KEY,
  PORT_GAMES,
  GAME_BASE_URL,
  GAME_ACCESS_TOKEN
} from '../config';

export interface Game {
  id: number;
  name: string;
  cover?: {
    image_id: string;
  };
  aggregated_rating?: number;
  first_release_date?: number;
  summary?: string;
  storyline?: string;
}
export const fetchGames = async () => {
  try {
    const response = await fetch(GAME_BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': GAME_API_KEY,
        Authorization: `Bearer ${GAME_ACCESS_TOKEN}`
      },
      body: 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites, name,summary,cover.image_id,id; limit 10;'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
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
      body: `fields name,cover.image_id,aggregated_rating,first_release_date,summary,storyline; where id = ${id};`
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorBody}`
      );
    }

    const games = await response.json();
    if (games.length === 0) {
      throw new Error(`No game found with id ${id}`);
    }
    return games[0];
  } catch (error) {
    console.error('Failed to fetch game details:', error);
    throw error;
  }
};
export interface Game {
  id: number;
  name: string;
  cover?: {
    image_id: string;
  };
  aggregated_rating?: number;
  first_release_date?: number;
  summary?: string;
  storyline?: string;
}
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
