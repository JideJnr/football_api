import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.BOT_SERVICE_URL;

interface BotResponse {
  status: string;
  message?: string;
}

export async function sendBotCommand(command: 'start' | 'stop'): Promise<BotResponse> {
  try {
    const res = await axios.post(`${baseURL}/${command}`);
    return res.data;
  } catch (err: any) {
    if (err.response) {
      throw new Error(err.response.data?.message || 'Bot service error');
    } else if (err.request) {
      throw new Error('Bot service unavailable');
    } else {
      throw new Error('Failed to contact bot service');
    }
  }
}