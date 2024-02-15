"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express = require('express');
const app = express();
const port = 3000;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({ "message": '🌌 Hello Milky Way!' });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
