import express from 'express';
import {
  geMatchById,
  getMatchesByDate,
  getAllCountries,
  getCountryById,
  getTeamById,
  getPlayerById,
} from '../../../controllers/match.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Match Data
 *   description: Retrieve matches, teams, countries, and players
 */

/**
 * @swagger
 * /match/match/id:
 *   get:
 *     summary: Get a match by ID
 *     tags: [Match Data]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "match_123"
 *     responses:
 *       200:
 *         description: Match data returned
 */
router.get('/match/id', geMatchById);

/**
 * @swagger
 * /match/match/date:
 *   get:
 *     summary: Get matches by date
 *     tags: [Match Data]
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         example: "2025-07-24"
 *     responses:
 *       200:
 *         description: Matches for the date returned
 */
router.get('/match/date', getMatchesByDate);

/**
 * @swagger
 * /match/country/id:
 *   get:
 *     summary: Get country by ID
 *     tags: [Match Data]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "country_456"
 *     responses:
 *       200:
 *         description: Country data returned
 */
router.get('/country/id', getCountryById);

/**
 * @swagger
 * /match/country:
 *   get:
 *     summary: Get all countries
 *     tags: [Match Data]
 *     responses:
 *       200:
 *         description: List of countries returned
 */
router.get('/country', getAllCountries);

/**
 * @swagger
 * /match/team/id:
 *   get:
 *     summary: Get team by ID
 *     tags: [Match Data]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "team_789"
 *     responses:
 *       200:
 *         description: Team data returned
 */
router.get('/team/id', getTeamById);

/**
 * @swagger
 * /match/player/id:
 *   get:
 *     summary: Get player by ID
 *     tags: [Match Data]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "player_321"
 *     responses:
 *       200:
 *         description: Player data returned
 */
router.get('/player/id', getPlayerById);

export default router;
