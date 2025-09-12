import { Router } from 'express';

import errorHandler from '../middlewares/safety/errorHandler.middleware.js';

const router = Router();

router.use(errorHandler);

export default router;