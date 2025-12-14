import { BACKEND_URL } from '../config';
import { Movie } from './typesFile';

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/movies/popular`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetail = async (id: any) => {
  try {
    const response = await fetch(`${BACKEND_URL}/movies/detail/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Failed to fetch movie details:', error);
  }
};

export const getMyMovies = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/movies`);
    return await response.json();
  } catch (error) {
    console.log('Error getting Movies', error);
  }
};

export const postMyMovies = async (movie: Movie) => {
  try {
    const response = await fetch(`${BACKEND_URL}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error saving movie:', error);
  }
};

export const deleteMovieFromMyMovies = async (id: number) => {
  try {
    const response = await fetch(`${BACKEND_URL}/movies/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    console.log('Error deleting movie:', error);
  }
};
