import express from 'express';
import {  getOverview } from '../../../controllers/analytics.controller';

const router = express.Router();

/**
 * @swagger
 * /analytics/overview:
 *   post:
 *     summary: Get general overview analytics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Overview data returned successfully
 *       500:
 *         description: Server error
 */
router.post('/overview', getOverview);

export default router;
