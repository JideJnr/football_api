"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPostCommand = exports.sendGetCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = process.env.BOT_SERVICE_URL || 'https://godscpr.onrender.com';
const sendGetCommand = async (command) => {
    const { data } = await axios_1.default.get(`${baseURL}/${command}`);
    return data;
};
exports.sendGetCommand = sendGetCommand;
const sendPostCommand = async (command) => {
    const { data } = await axios_1.default.post(`${baseURL}/${command}`);
    return data;
};
exports.sendPostCommand = sendPostCommand;
