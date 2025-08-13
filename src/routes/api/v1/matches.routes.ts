import express from 'express';
import {
  getMatchById,
  getMatchesByDate,
  getAllCountries,
  getCountryById,
  getTeamById,
  getPlayerById,
  getLiveMatches,
} from '../../../controllers/match.controller';

const router = express.Router();

router.get('/match/live', getLiveMatches);
router.get('/match/id', getMatchById);
router.get('/match/date', getMatchesByDate);
router.get('/country/id', getCountryById);
router.get('/country', getAllCountries);
router.get('/team/id', getTeamById);
router.get('/player/id', getPlayerById);

export default router;
