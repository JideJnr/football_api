import express from 'express';
import { sendCommand } from './botClient';

const router = express.Router();

// Optional API Key Middleware


// Start Bot Endpoint
router.post('/start',  async (_req, res) => {
  try {
    const result = await sendCommand('start');
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Stop Bot Endpoint
router.post('/stop',  async (_req, res) => {
  try {
    const result = await sendCommand('stop');
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to stop bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;