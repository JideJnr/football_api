"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusById = exports.startBotById = exports.getAllBot = exports.checkEngineStatus = exports.stopEngine = exports.startEngine = void 0;
const botClient_1 = require("../botClient");
const startEngine = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('start');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startEngine = startEngine;
const stopEngine = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('stop');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.stopEngine = stopEngine;
const checkEngineStatus = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('status');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.checkEngineStatus = checkEngineStatus;
const getAllBot = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getAllBot = getAllBot;
const startBotById = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('start/id');
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startBotById = startBotById;
const getStatusById = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('getStatus/id');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getStatusById = getStatusById;
