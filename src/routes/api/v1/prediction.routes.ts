import express from 'express';
import { getAllPredictionsByDate, getPredictionById, } from '../../../controllers/prediction.controller.js';

const router = express.Router();

router.get('/prediction/id', getPredictionById);
router.put('/prediction/date', getAllPredictionsByDate);

export default router;
