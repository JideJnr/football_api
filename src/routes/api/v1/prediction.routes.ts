import express from 'express';
import { getAllPredictionsByDate } from '../../../controllers/analytics.controller';

const router = express.Router();

router.put('/prediction/date', getAllPredictionsByDate);

export default router;
/**
 * @swagger
 * tags:
 *   name: Prediction
 *   description: Prediction related endpoints
 */