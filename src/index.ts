import express from 'express';
import cors from 'cors';
import { sendBotCommand } from './botClient';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// API Key check middleware (optional)
const apiKeyCheck = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!process.env.API_KEY) return next(); // Skip if no API key set
  
  const clientApiKey = req.headers['x-api-key'];
  if (clientApiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ error: 'Invalid API key' });
  }
};

// Routes
app.post('/start', apiKeyCheck, async (_req, res) => {
  try {
    const result = await sendBotCommand('start');
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/stop', apiKeyCheck, async (_req, res) => {
  try {
    const result = await sendBotCommand('stop');
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`🚪 API Gateway running on port ${PORT}`);
});