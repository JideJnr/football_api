import express from 'express';
import {  getAllBot, getStatusById, postPrediction, runBetBuilder, startBotById, startEngine, stopEngine } from '../../../controllers/control.controller';

const router = express.Router();

router.post('/start', startEngine);
router.get('/stop', stopEngine);
router.get('/all', getAllBot);
router.post('/start/id', startBotById);
router.get('/stop/id', startBotById);
router.get('/betbuilder', runBetBuilder);
router.get('/status/id', getStatusById);
router.post('/prediction', postPrediction);

export default router;