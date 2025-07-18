"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const botClient_1 = require("./botClient");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Key check middleware (optional)
const apiKeyCheck = (req, res, next) => {
    if (!process.env.API_KEY)
        return next(); // Skip if no API key set
    const clientApiKey = req.headers['x-api-key'];
    if (clientApiKey === process.env.API_KEY) {
        next();
    }
    else {
        res.status(403).json({ error: 'Invalid API key' });
    }
};
// Routes
app.post('/start', apiKeyCheck, async (_req, res) => {
    try {
        const result = await (0, botClient_1.sendBotCommand)('start');
        res.json(result);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
});
app.post('/stop', apiKeyCheck, async (_req, res) => {
    try {
        const result = await (0, botClient_1.sendBotCommand)('stop');
        res.json(result);
    }
    catch (e) {
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
