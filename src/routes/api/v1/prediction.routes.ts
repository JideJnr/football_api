import express from 'express';
import { getAllPredictionsByDate } from '../../../controllers/prediction.controller.js';

const router = express.Router();

router.put('/prediction/date', getAllPredictionsByDate);

export default router;
