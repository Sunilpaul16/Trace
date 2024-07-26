import { Router } from 'express';
import { getMovies, postMovie } from './controllers';

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', postMovie);

export default router;
router;
