"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const compression = require("compression");
const helmet = require("helmet");
const express = require('express');
const app = express();
const port = 3000;
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
});
app.use(limiter);
app.use((0, cors_1.default)());
app.use(helmet());
app.get('/', (req, res) => {
    res.status(200).json({ "message": '🌌 Hello Milky Way!' });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
