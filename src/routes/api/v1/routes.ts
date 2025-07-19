import express from 'express';
import { sendCommand } from '../../../botClient';

const router = express.Router();

/**
 * @swagger
 * /start:
 *   post:
 *     summary: Start the bot
 *     tags: [Bot Control]
 *     description: Initiates the bot service
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Bot started successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Bot started"
 */
router.post('/start', async (_req, res) => {
  try {
    await sendCommand('start');
    res.status(200).json({ success: true, message: 'Bot started' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * @swagger
 * /stop:
 *   post:
 *     summary: Stop the bot
 *     tags: [Bot Control]
 *     description: Terminates the bot service
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Bot stopped successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Bot stopped"
 */
router.post('/stop', async (_req, res) => {
  try {
    await sendCommand('stop');
    res.status(200).json({ success: true, message: 'Bot stopped' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Get bot status
 *     tags: [Bot Control]
 *     description: Returns the current bot running status
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Bot status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Bot is running"
 *                 data:
 *                   type: object
 *                   properties:
 *                     running:
 *                       type: boolean
 *                       example: true
 */
router.get('/status', (_req, res) => {
  const running = getStatus(); // should return boolean
  res.status(200).json({
    success: true,
    message: running ? 'Bot is running' : 'Bot is stopped',
    data: { running } 
  });
});

export default router;
