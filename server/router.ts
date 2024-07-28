import { Router } from 'express';
import {
  deleteMovie,
  getMovies,
  postMovie
} from './controllers/movies-controllers';
import {
  getBooks,
  postBook,
  deleteBook
} from './controllers/books-controllers';
import { getGames, postGame, deleteGame } from './controllers/games-controller';

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', postMovie);
router.delete('/movies/:id', deleteMovie);

router.get('/books', getBooks);
router.post('/books', postBook);
router.delete('/books/:id', deleteBook);

router.get('/games', getGames);
router.post('/games', postGame);
router.delete('/games/:id', deleteGame);

export default router;
router;
