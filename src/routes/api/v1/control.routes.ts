import express from 'express';
import {
  getAllBots,
  getStatusById,
  startBotById,
  stopBotById,
  startEngine,
  stopEngine,
  checkEngineStatus,
} from '../../../controllers/control.controller';

const router = express.Router();

// Engine control - POST for actions
router.post('/start', startEngine);
router.post('/stop', stopEngine);
router.get('/status', checkEngineStatus);

// Get all bots - GET
router.get('/all', getAllBots);

// Bot control - POST since they change state
router.post('/start/:id', startBotById);
router.post('/stop/:id', stopBotById);

// Bot status - GET
router.get('/status/:id', getStatusById);

export default router;
