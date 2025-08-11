import { Request, Response } from 'express';
import { sendPostCommand } from '../botClient';

// Engine control
export const startEngine = async (req: Request, res: Response) => {
  try {
    const result = await sendPostCommand('start');
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const stopEngine = async (req: Request, res: Response) => {
  try {
    const result = await sendPostCommand('stop');
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: 'Failed to stop bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const checkEngineStatus = async (req: Request, res: Response) => {
  try {
    const result = await sendPostCommand('status');
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: 'Failed to get engine status',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Bots list
export const getAllBots = async (req: Request, res: Response) => {
  try {
    const result = await sendPostCommand('all');
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: 'Failed to get bots list',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Start bot by id
export const startBotById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await sendPostCommand(`start/${id}`);
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: `Failed to start bot with id ${req.params.id}`,
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Stop bot by id
export const stopBotById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await sendPostCommand(`stop/${id}`);
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: `Failed to stop bot with id ${req.params.id}`,
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get status by bot id
export const getStatusById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await sendPostCommand(`status/${id}`);
    res.json(result);
  } catch (error) {
    res.status(200).json({
      success: false,
      error: `Failed to get status of bot with id ${req.params.id}`,
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
