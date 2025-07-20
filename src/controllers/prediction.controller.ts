import { Request, Response } from "express";

export const getPredictionById = async (req:Request, res: Response) => {
  try {
    res.status(201).json({ success: true, message:'All Live Matches' , data: []  });
  } catch (error) {
    res.status(400).json({ success: false, message:'Error Getting Matches' , data: []  });
  }
};

export const getAllPredictionsByDate = async (req:Request, res:Response) => {
    try {
      
  
  
      res.status(200).json({
        success: true,
        data: {
          
        }
      });
    } catch (error) {
      
    }
}








