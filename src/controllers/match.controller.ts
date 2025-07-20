import e, { Request, Response } from "express";


export const getMatchesByDate = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live Matches' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting Matches' , data: []  });
  }
};

export const geMatchById = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live Matches' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting Matches' , data: []  });
  }
};

export const getCountryById = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live country' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting country' , data: []  });
  }
};

export const getAllCountries = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live country' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting country' , data: []  });
  }
};

export const getTeamById = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live country' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting country' , data: []  });
  }
};

export const getPlayerById = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live country' , data: []  });
  } catch (error) {
    res.status(201).json({ success: false, message:'Error Getting country' , data: []  });
  }
};

