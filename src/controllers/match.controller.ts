import { Request, Response } from "express";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'sportsData';
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
      return res.status(400).json({
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
      return res.status(404).json({
        success: false,
        message: 'Match not found',
        data: []
      });
    }

    // Utility: remove null, undefined, or empty strings
    const removeEmpty = (obj: any): any => {
      if (Array.isArray(obj)) {
        return obj.map(removeEmpty).filter(v => v !== undefined);
      }
      if (obj && typeof obj === 'object') {
        return Object.fromEntries(
          Object.entries(obj)
            .filter(([_, v]) => v !== null && v !== undefined && v !== '')
            .map(([k, v]) => [k, removeEmpty(v)])
        );
      }
      return obj;
    };

    res.status(200).json({
      success: true,
      message: 'Match details',
      data: removeEmpty(match)
    });

  } catch (error) {
    res.status(500).json({
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