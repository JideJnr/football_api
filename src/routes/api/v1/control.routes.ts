import express from 'express';
import {
  getAllBot,
  getStatusById,

  startBotById,
  startEngine,
  stopEngine,
} from '../../../controllers/control.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bot Control
 *   description: Engine and bot control endpoints
 */

/**
 * @swagger
 * /control/start:
 *   post:
 *     summary: Start the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine started successfully
 *       500:
 *         description: Failed to start engine
 */
router.post('/start', startEngine);

/**
 * @swagger
 * /control/stop:
 *   get:
 *     summary: Stop the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine stopped successfully
 */
router.get('/stop', stopEngine);

/**
 * @swagger
 * /control/all:
 *   get:
 *     summary: Get all available bots
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: List of bots returned
 */
router.get('/all', getAllBot);

/**
 * @swagger
 * /control/start/id:
 *   post:
 *     summary: Start a specific bot by ID
 *     tags: [Bot Control]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot started successfully
 */
router.post('/start/id', startBotById);

/**
 * @swagger
 * /control/stop/id:
 *   get:
 *     summary: Stop a specific bot by ID
 *     tags: [Bot Control]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot stopped successfully
 */
router.get('/stop/id', startBotById);


/**
 * @swagger
 * /control/status/id:
 *   get:
 *     summary: Get status of a specific bot
 *     tags: [Bot Control]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot status returned
 */
router.get('/status/id', getStatusById);


export default router;
