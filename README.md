# Trace

Keep track of everything you've watched, read, and played — books, games, and movies in one place.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React Native + Expo SDK 54, Expo Router, NativeWind v4 |
| Backend | Express.js + TypeScript, MongoDB (Mongoose) |
| External APIs | TMDB (movies), Google Books, IGDB (games) — proxied through backend |

---

## Prerequisites

- Node.js 18+
- npm
- MongoDB running locally on port 27017
- Expo Go (SDK 54) on your phone

---

## Setup

### 1. Clone

```bash
git clone git@github.com:Sunilpaul16/Trace.git
cd Trace
```

### 2. Backend

```bash
cd server
npm install
```

Copy the example env file and fill in your API keys:

```bash
cp .env.example .env
```

```
# server/.env
MOVIE_API_KEY=       # https://www.themoviedb.org/settings/api
GAME_API_KEY=        # Twitch Client-ID — https://api-docs.igdb.com
GAME_ACCESS_TOKEN=   # Twitch Bearer token
BOOK_API_KEY=        # https://console.cloud.google.com
```

Start the server:

```bash
npm run dev
```

The server runs on `http://localhost:3000`.

### 3. Frontend

```bash
cd Trace
npm install
npx expo start
```

Scan the QR code with Expo Go. No API keys needed on the frontend — all external calls go through the backend.

---

## Project structure

```
Trace/
├── server/                  # Express backend
│   ├── controllers/
│   │   ├── movies-controllers.ts       # saved items CRUD
│   │   ├── books-controllers.ts
│   │   ├── games-controller.ts
│   │   ├── browse-movies-controller.ts # TMDB proxy
│   │   ├── browse-books-controller.ts  # Google Books proxy
│   │   └── browse-games-controller.ts  # IGDB proxy
│   ├── database.ts          # Mongoose schemas
│   ├── router.ts            # all routes
│   └── index.ts             # entry point
│
└── Trace/                   # Expo app
    ├── app/
    │   ├── (tabs)/          # Home, Movies, Books, Games
    │   ├── (screens)/       # Detail screens
    │   └── (login)/         # Sign in / Sign up (UI only)
    ├── components/
    │   ├── movies/
    │   ├── books/
    │   ├── games/
    │   ├── profile/
    │   └── ui/
    ├── API/                 # fetch helpers (all call backend)
    └── config.js            # BACKEND_URL + CDN constants
```

---

## API routes

### Browse (proxied to external APIs)

| Method | Path | Returns |
|---|---|---|
| GET | `/movies/popular` | Popular movies from TMDB |
| GET | `/movies/detail/:id` | Movie detail from TMDB |
| GET | `/movies/search?q=` | Movie search results |
| GET | `/books/popular` | Popular books from Google Books |
| GET | `/books/detail/:id` | Book detail |
| GET | `/books/search?q=` | Book search results |
| GET | `/games/popular` | Top-rated recent games from IGDB |
| GET | `/games/detail/:id` | Game detail |
| GET | `/games/search?q=` | Game search results |

### Saved items (MongoDB)

| Method | Path | Action |
|---|---|---|
| GET | `/movies` | Get saved movies |
| POST | `/movies` | Save a movie |
| DELETE | `/movies/:id` | Remove a movie |
| GET | `/books` | Get saved books |
| POST | `/books` | Save a book |
| DELETE | `/books/:id` | Remove a book |
| GET | `/games` | Get saved games |
| POST | `/games` | Save a game |
| DELETE | `/games/:id` | Remove a game |

---

## Optional: MongoDB Compass

To visually browse the database, download [MongoDB Compass](https://www.mongodb.com/try/download/compass) and connect to `mongodb://127.0.0.1/my-app-db`.
