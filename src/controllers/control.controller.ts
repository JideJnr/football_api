import { Request, Response } from "express";
import { sendCommand } from "../botClient";


export const startEngine = async ( res: Response) => {
  try {
    const result = await sendCommand('start');
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
    const result = await sendCommand('stop');
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
    const result = await sendCommand('all');
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
    const result = await sendCommand('start/id');
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
    const result = await sendCommand('getStatus/id');
    res.json(result);
  } catch (error) {
    res.status(201).json({ 
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const runBetBuilder = async ( res: Response) => {
  try {
    const result = await sendCommand('betBuilder');
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
    const result = await sendCommand('prediction/id');
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const runPredictionById = async ( res: Response) => {
  try {
    const result = await sendCommand('prediction/id');
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to stop bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};






