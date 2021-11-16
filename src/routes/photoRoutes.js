import { Router } from 'express';
import photosController from '../controllers/PhotosController';

const router = new Router();

router.post('/', photosController.store);

export default router;
