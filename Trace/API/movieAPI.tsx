import {
  MOVIE_API_KEY,
  MOVIE_BASE_URL,
  POPULAR_MOVIES_API_URL,
  PORT_MOVIES
} from '../config';
import { Movie } from './typesFile';

export const fetchMovies = async () => {
  try {
    const response = await fetch(
      `${POPULAR_MOVIES_API_URL}&language=en-US&page=1`
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const fetchMovieDetail = async (id: any) => {
  try {
    const response = await fetch(
      `${MOVIE_BASE_URL}${id}?api_key=${MOVIE_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Failed to fetch movie details:', error);
  }
};

export const getMyMovies = async () => {
  try {
    const response = await fetch(PORT_MOVIES);
    return await response.json();
  } catch (error) {
    console.log('Error getting Movies', error);
  }
};

export const postMyMovies = async (movie: Movie) => {
  try {
    const response = await fetch(PORT_MOVIES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Error creating Movie', error);
  }
};
export const deleteMovieFromMyMovies = async (id: number) => {
  try {
    const response = await fetch(`${PORT_MOVIES}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.log('Error deleting Movie', error);
  }
};
