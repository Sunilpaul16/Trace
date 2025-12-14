import Constants from 'expo-constants';

const host = Constants.expoConfig?.hostUri?.split(':')[0] ?? '10.0.2.2';
const BACKEND_URL = `http://${host}:3000`;

// Public CDN URLs — no API keys needed
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const COVER_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';

export { BACKEND_URL, IMAGE_BASE_URL, COVER_BASE_URL };
