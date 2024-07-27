import { Router } from 'express';
import {
  getBooks,
  getGames,
  getMovies,
  postGame,
  postMovie
} from './controllers';

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', postMovie);

router.get('/books', getBooks);
router.post('/books', getBooks);

router.get('/games', getGames);
router.post('/games', postGame);

export default router;
router;