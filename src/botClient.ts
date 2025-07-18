import axios from 'axios';

const baseURL = process.env.BOT_SERVICE_URL;

export const sendCommand = async (command: 'start' | 'stop') => {
  const { data } = await axios.post(`${baseURL}/${command}`);
  return data;
};