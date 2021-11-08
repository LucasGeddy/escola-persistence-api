import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.post('/', alunoController.create);

export default router;
