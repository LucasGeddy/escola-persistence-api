import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, userController.create);
router.get('/', loginRequired, userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
