import actionHandlers from '@/apis/actions';
import { Router } from 'express';

const router = Router();

router.use('/actions', actionHandlers);

export default router;
