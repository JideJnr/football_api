import { Request, Response } from 'express';
import { sendPostCommand } from '../botClient';

  export const getUserActivities = async (req: Request, res: Response) => {
    try {
      const { uid } = req.params;
      res.status(200).json({ success: true});
    } catch (error) {
      console.error('Get Activities Error:', error);
      res.status(500).json({ success: false, message: 'Error fetching activities' });
    }
  };

  export const logActivity = async () => {
    try {
    } catch (error) {
      console.error('Log Activity Error:', error);
    }
  };

  export const runBetBuilder = async ( res: Response) => {
    try {
      const result = await sendPostCommand('betBuilder');
      res.json(result);
    } catch (error) {
      res.status(201).json({ 
        error: 'Failed to stop bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const postPrediction = async ( res: Response) => {
    try {
      const result = await sendPostCommand('prediction/id');
      res.json(result);
    } catch (error) {
      res.status(500).json({ 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getPredictionById = async ( res: Response) => {
    try {
      const result = await sendPostCommand('prediction/id');
      res.json(result);
    } catch (error) {
      res.status(500).json({ 
        error: 'Failed to stop bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getAllLogic = async ( res: Response) => {
    try {
      const result = await sendPostCommand('logic/all');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getLogicById = async ( res: Response) => {
    try {
      const result = await sendPostCommand('logic/all');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getSuggestion = async ( res: Response) => {
    try {
      const result = await sendPostCommand('logic/all');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getUserData = async ( res: Response) => {
    try {
      const result = await sendPostCommand('logic/all');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };