import {
  MOVIE_API_KEY,
  MOVIE_BASE_URL,
  POPULAR_MOVIES_API_URL,
  PORT_MOVIES
} from '../config';

export const fetchMovies = async () => {
  try {
    const response = await fetch(POPULAR_MOVIES_API_URL);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
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
    console.error('Failed to fetch movie details:', error);
    throw error;
  }
};
export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
}
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
    throw error;
  }
};
