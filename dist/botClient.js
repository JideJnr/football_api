"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBotCommand = sendBotCommand;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const baseURL = process.env.BOT_SERVICE_URL;
async function sendBotCommand(command) {
    try {
        const res = await axios_1.default.post(`${baseURL}/${command}`);
        return res.data;
    }
    catch (err) {
        if (err.response) {
            throw new Error(err.response.data?.message || 'Bot service error');
        }
        else if (err.request) {
            throw new Error('Bot service unavailable');
        }
        else {
            throw new Error('Failed to contact bot service');
        }
    }
}
