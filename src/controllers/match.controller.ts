import { Request, Response } from "express";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || '';
const dbName =  'sportsData';
const collectionName = 'liveMatches';

export const getLiveMatches = async (req: Request, res: Response) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Projection: Only get required fields from DB
    const matches = await collection.find({}, {
      projection: {
        homeTeamName: 1,
        awayTeamName: 1,
        gameScore: 1
      }
    }).toArray();

    const formattedMatches = matches.map(match => ({
      id: match._id,
      homeTeam: match.homeTeamName,
      awayTeam: match.awayTeamName,
      score: match.gameScore?.[0] || null
    }));

    await client.close();

    res.status(200).json({
      success: true,
      message: 'All Live Matches',
      data: formattedMatches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error Getting Live Matches',
      data: [],
      error: error instanceof Error ? error.message : error
    });
  }
};


export const getUpcomingMatches = async (req:Request, res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live country' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting country' , data: []  });
    }
  };

  export const getMatchesByDate = async (req:Request, res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live Matches' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting Matches' , data: []  });
    }
  };

export const getMatchById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(200).json({
        success: false,
        message: 'Invalid match ID',
        data: []
      });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const match = await collection.findOne({ _id: new ObjectId(id) });
    await client.close();

    if (!match) {
      return res.status(200).json({
        success: false,
        message: 'Match not found',
        data: []
      });
    }

    // Structure the response data
    const structuredData = {
      matchInfo: {
        id: match._id,
        eventId: match.eventId,
        homeTeam: match.homeTeamName,
        awayTeam: match.awayTeamName,
        venue: match.fixtureVenue?.name,
        startTime: match.estimateStartTime,
        status: match.matchStatus,
        period: match.period,
        playedTime: match.playedSeconds,
        score: match.gameScore?.[0],
        setScore: match.setScore
      },
      sportDetails: {
        sport: match.sport?.name,
        category: match.sport?.category?.name,
        tournament: match.sport?.category?.tournament?.name
      },
      mainMarkets: {
        matchWinner: match.markets?.["1X2"]?.main?.outcomes?.map((outcome: any) => ({
          outcome: outcome.desc,
          odds: outcome.odds
        })),
        overUnder: Object.entries(match.markets?.["Over/Under"] || {}).map(([key, market]: [string, any]) => ({
          specifier: key,
          outcomes: market.outcomes?.map((outcome: any) => ({
            outcome: outcome.desc,
            odds: outcome.odds
          }))
        })),
        doubleChance: match.markets?.["Double Chance"]?.main?.outcomes?.map((outcome: any) => ({
          outcome: outcome.desc,
          odds: outcome.odds
        }))
      }
    };

    res.status(200).json({
      success: true,
      message: 'Match details',
      data: structuredData
    });

  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Error getting match details',
      data: [],
      error: error instanceof Error ? error.message : error
    });
  }
};

  export const getCountryById = async (req:Request, res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live country' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting country' , data: []  });
    }
  };

  export const getAllCountries = async ( res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live country' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting country' , data: []  });
    }
  };

  export const getTeamById = async (req:Request, res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live country' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting country' , data: []  });
    }
  };

  export const getPlayerById = async (req:Request, res: Response) => {
    try {
      res.status(200).json({ success: true, message:'All Live country' , data: []  });
    } catch (error) {
      res.status(200).json({ success: false, message:'Error Getting country' , data: []  });
    }
  };