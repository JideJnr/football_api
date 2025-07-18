import express from 'express';
import { sendCommand } from './botClient';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bot Control
 *   description: API endpoints for controlling the bot
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BotResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         message:
 *           type: string
 *           example: "Bot started successfully"
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "Failed to start bot service"
 *         details:
 *           type: string
 *           example: "Connection timeout"
 *   securitySchemes:
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: x-api-key
 *       description: API key for authentication
 */

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
 *               $ref: '#/components/schemas/BotResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/start', async (_req, res) => {
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
 *               $ref: '#/components/schemas/BotResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/stop', async (_req, res) => {
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