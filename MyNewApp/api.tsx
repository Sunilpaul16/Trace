import MY_API_KEY from './config';

const API_KEY = MY_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const fetchMovies = async () => {
  try {
    const response = await fetch(POPULAR_API_URL);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
