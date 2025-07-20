import express from 'express';
import { geMatchById, getMatchesByDate, getAllCountries, getCountryById, getTeamById, getPlayerById
} from '../../../controllers/match.controller';



const router = express.Router();

router.get('/match/id', geMatchById);
router.get('/match/date', getMatchesByDate);

router.get('/country/id', getCountryById);
router.get('/country', getAllCountries);

router.get('/team/id', getTeamById);
router.get('/player/id', getPlayerById);



export default router;
