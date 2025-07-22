import express from 'express';
import { getBotMetrics, getOverview } from '../../../controllers/analytics.controller';

const router = express.Router();

router.post('/overview', getOverview);
router.get('/getmetrics', getBotMetrics);

export default router;