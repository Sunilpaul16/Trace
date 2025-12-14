import { Router } from "express";
import {
  deleteMovie,
  getMovies,
  postMovie,
} from "./controllers/movies-controllers";
import {
  getPopularMovies,
  getMovieDetail,
  searchMovies,
} from "./controllers/browse-movies-controller";
import {
  getBooks,
  postBook,
  deleteBook,
} from "./controllers/books-controllers";
import { getGames, postGame, deleteGame } from "./controllers/games-controller";
import {
  getPopularBooks,
  getBookDetail,
  searchBooks,
} from "./controllers/browse-books-controller";
import {
  getPopularGames,
  getGameDetail,
  searchGames,
} from "./controllers/browse-games-controller";

const router = Router();

router.get("/movies/popular", getPopularMovies);
router.get("/movies/search", searchMovies);
router.get("/movies/detail/:id", getMovieDetail);
router.get("/movies", getMovies);
router.post("/movies", postMovie);
router.delete("/movies/:id", deleteMovie);

router.get("/books/popular", getPopularBooks);
router.get("/books/search", searchBooks);
router.get("/books/detail/:id", getBookDetail);
router.get("/books", getBooks);
router.post("/books", postBook);
router.delete("/books/:id", deleteBook);

router.get("/games/popular", getPopularGames);
router.get("/games/search", searchGames);
router.get("/games/detail/:id", getGameDetail);
router.get("/games", getGames);
router.post("/games", postGame);
router.delete("/games/:id", deleteGame);

export default router;
