"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPredictionsByDate = exports.getPredictionById = void 0;
const getPredictionById = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: 'All Live Matches', data: [] });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Error Getting Matches', data: [] });
    }
};
exports.getPredictionById = getPredictionById;
const getAllPredictionsByDate = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: {}
        });
    }
    catch (error) {
    }
};
exports.getAllPredictionsByDate = getAllPredictionsByDate;
