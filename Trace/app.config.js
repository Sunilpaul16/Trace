import 'dotenv/config';

export default {
  expo: {
    name: 'Trace',
    slug: 'trace',
    scheme: 'trace',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/splashlogo.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splashlogo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/splashlogo.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.anonymous.MyNewApp'
    },
    web: {
      favicon: './assets/splashlogo.png'
    },
    plugins: ['expo-router'],
    extra: {
      movieApiKey: process.env.MOVIE_API_KEY,
      gameAccessToken: process.env.GAME_ACCESS_TOKEN,
      gameApiKey: process.env.GAME_API_KEY,
      bookApiKey: process.env.BOOK_API_KEY
    }
  }
};
