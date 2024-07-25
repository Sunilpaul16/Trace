const API_KEY = '2c56b2c7fbad45fbeadd21e43def2158';
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const GetMovies = async () => {
  try {
    const response = await fetch(POPULAR_API_URL);
    return await response.json();
  } catch (error) {
    console.log('Error getting Events', error);
  }
};
