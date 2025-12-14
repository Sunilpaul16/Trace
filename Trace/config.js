import Constants from 'expo-constants';

const host = Constants.expoConfig?.hostUri?.split(':')[0] ?? '10.0.2.2';
const BACKEND_URL = `http://${host}:3000`;

// Public image CDN — no key needed
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Games (still called from frontend until migrated)
const GAME_ACCESS_TOKEN = Constants.expoConfig.extra.gameAccessToken;
const GAME_API_KEY = Constants.expoConfig.extra.gameApiKey;
const GAME_BASE_URL = 'https://api.igdb.com/v4/games';
const COVER_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';
const SCREENSHOT_BASE_URL = 'https://api.igdb.com/v4/screenshots';

// Books (still called from frontend until migrated)
const MY_BOOK_API_KEY = Constants.expoConfig.extra.bookApiKey;
const BOOK_BASE_URL = 'https://www.googleapis.com/books/v1/volumes/';
const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&maxResults=10&key=${MY_BOOK_API_KEY}`;

// Legacy per-category ports (books/games still use these)
const PORT_BOOKS = `${BACKEND_URL}/books`;
const PORT_GAMES = `${BACKEND_URL}/games`;

export {
  BACKEND_URL,
  IMAGE_BASE_URL,
  COVER_BASE_URL,
  SCREENSHOT_BASE_URL,
  GAME_BASE_URL,
  GAME_API_KEY,
  GAME_ACCESS_TOKEN,
  MY_BOOK_API_KEY,
  BOOK_BASE_URL,
  POPULAR_BOOKS_API_URL,
  PORT_BOOKS,
  PORT_GAMES,
};
