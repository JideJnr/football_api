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

// ✅ Live matches (only team names + score)
router.get('/live', getLiveMatches);

// ✅ Match by ID (full details, cleaned)
router.get('/match/:id', getMatchById);

// Other endpoints
router.get('/match/date', getMatchesByDate);
router.get('/country/:id', getCountryById);
router.get('/country', getAllCountries);
router.get('/team/:id', getTeamById);
router.get('/player/:id', getPlayerById);

export default router;
