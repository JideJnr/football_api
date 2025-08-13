import express from 'express';
import {  getOverview } from '../../../controllers/analytics.controller';

const router = express.Router();

router.post('/overview', getOverview);

export default router;
