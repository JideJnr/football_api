"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = exports.getCountryById = exports.geMatchById = exports.getMatchesByDate = void 0;
const getMatchesByDate = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: 'All Live Matches', data: [] });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Error Getting Matches', data: [] });
    }
};
exports.getMatchesByDate = getMatchesByDate;
const geMatchById = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: 'All Live Matches', data: [] });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Error Getting Matches', data: [] });
    }
};
exports.geMatchById = geMatchById;
const getCountryById = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: 'All Live country', data: [] });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Error Getting country', data: [] });
    }
};
exports.getCountryById = getCountryById;
const getAllCountries = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: 'All Live country', data: [] });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Error Getting country', data: [] });
    }
};
exports.getAllCountries = getAllCountries;
