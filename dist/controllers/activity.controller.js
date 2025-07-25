"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.getSuggestion = exports.getAllGamesByLogic = exports.getAllLogic = exports.getPredictionById = exports.postPrediction = exports.runBetBuilder = exports.logActivity = exports.getUserActivities = void 0;
const botClient_1 = require("../botClient");
const getUserActivities = async (req, res) => {
    try {
        const { uid } = req.params;
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error('Get Activities Error:', error);
        res.status(500).json({ success: false, message: 'Error fetching activities' });
    }
};
exports.getUserActivities = getUserActivities;
const logActivity = async () => {
    try {
    }
    catch (error) {
        console.error('Log Activity Error:', error);
    }
};
exports.logActivity = logActivity;
const runBetBuilder = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('betBuilder');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.runBetBuilder = runBetBuilder;
const postPrediction = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('prediction/id');
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.postPrediction = postPrediction;
const getPredictionById = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('prediction/id');
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getPredictionById = getPredictionById;
const getAllLogic = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('logic/all');
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
exports.getAllLogic = getAllLogic;
const getAllGamesByLogic = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('logic/all');
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
exports.getAllGamesByLogic = getAllGamesByLogic;
const getSuggestion = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('logic/all');
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
exports.getSuggestion = getSuggestion;
const getUserData = async (res) => {
    try {
        const result = await (0, botClient_1.sendPostCommand)('logic/all');
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
exports.getUserData = getUserData;
