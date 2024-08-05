import Constants from 'expo-constants';
// Movies
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie/';
const MOVIE_API_KEY = Constants.expoConfig.extra.movieApiKey;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const POPULAR_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`;

// Games
const GAME_ACCESS_TOKEN = Constants.expoConfig.extra.gameAccessToken;
const GAME_API_KEY = Constants.expoConfig.extra.gameApiKey;
const GAME_BASE_URL = 'https://api.igdb.com/v4/games';
const COVER_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';
const SCREENSHOT_BASE_URL = 'https://api.igdb.com/v4/screenshots';
// ('https://images.igdb.com/igdb/image/upload/t_screenshot_huge/');
// Books
const MY_BOOK_API_KEY = Constants.expoConfig.extra.bookApiKey;
const BOOK_BASE_URL = 'https://www.googleapis.com/books/v1/volumes/';
// const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:bestsellers&maxResults=10&orderBy=relevance&key=${MY_BOOK_API_KEY}`;
// const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:bestseller&maxResults=40&orderBy=relevance&key=${MY_BOOK_API_KEY}`;
const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=10&key=${MY_BOOK_API_KEY}`; //herry potter

// const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:bestsellers&maxResults=40&orderBy=relevance&key=${MY_BOOK_API_KEY}`;
const PORT_BOOKS = `http://10.0.2.2:3000/books`;
const PORT_MOVIES = `http://10.0.2.2:3000/movies`;
const PORT_GAMES = `http://10.0.2.2:3000/games`;

// const PORT_BOOKS = `exp://10.10.22.240:8081/books`;
// const PORT_MOVIES = `exp://10.10.22.240:8081/movies`;
// const PORT_GAMES = `exp://10.10.22.240:8081/games`;

export {
  MOVIE_API_KEY,
  MY_BOOK_API_KEY,
  GAME_API_KEY,
  IMAGE_BASE_URL,
  MOVIE_BASE_URL,
  BOOK_BASE_URL,
  GAME_BASE_URL,
  POPULAR_MOVIES_API_URL,
  POPULAR_BOOKS_API_URL,
  PORT_BOOKS,
  PORT_MOVIES,
  PORT_GAMES,
  GAME_ACCESS_TOKEN,
  COVER_BASE_URL,
  SCREENSHOT_BASE_URL
};
