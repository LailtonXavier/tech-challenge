import { Router } from 'express';

import favoriteController from '../controllers/FavoriteController';

const router = new Router();

router.get('/', favoriteController.index);
router.post('/', favoriteController.store);
router.delete('/:id', favoriteController.delete);

export default router;
