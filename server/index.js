const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_KEY = '2c56b2c7fbad45fbeadd21e43def2158';
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(POPULAR_API_URL);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error fetching movies');
  }
});

app.get('/search', async (req, res) => {
  const movieName = req.query.name;
  const url = `${SEARCH_API_URL}${encodeURIComponent(movieName)}`;

  try {
    const response = await axios.get(url);
    const movies = response.data.results.map(movie => ({
      title: movie.title,
      poster_url: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image'
    }));
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error fetching movies');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
