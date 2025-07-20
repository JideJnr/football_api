"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prediction_controller_js_1 = require("../../../controllers/prediction.controller.js");
const router = express_1.default.Router();
router.get('/prediction/id', prediction_controller_js_1.getPredictionById);
router.put('/prediction/date', prediction_controller_js_1.getAllPredictionsByDate);
exports.default = router;
