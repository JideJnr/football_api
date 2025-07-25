import { Request, Response } from "express";
import { sendPostCommand } from "../botClient";


  export const startEngine = async ( res: Response) => {
    try {
      const result = await sendPostCommand('start');
      res.json(result);
    } catch (error) {
      res.status(201).json({ 
        success: false,
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const stopEngine = async ( res: Response) => {
    try {
      const result = await sendPostCommand('stop');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to stop bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const checkEngineStatus = async ( res: Response) => {
    try {
      const result = await sendPostCommand('status');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to stop bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getAllBot = async ( res: Response) => {
    try {
      const result = await sendPostCommand('all');
      res.json(result);
    } catch (error) {
      res.status(201).json({
        success: false, 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const startBotById = async ( res: Response) => {
    try {
      const result = await sendPostCommand('start/id');
      res.json(result);
    } catch (error) {
      res.status(200).json({ 
        success: false,
        error: 'Failed to stop bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getStatusById = async ( res: Response) => {
    try {
      const result = await sendPostCommand('getStatus/id');
      res.json(result);
    } catch (error) {
      res.status(201).json({ 
        error: 'Failed to start bot service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
