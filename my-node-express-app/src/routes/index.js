import { Router } from 'express';
import { IndexController } from '../controllers/index.js';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/', router);
    router.get('/', indexController.getIndex.bind(indexController));
}