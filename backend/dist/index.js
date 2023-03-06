"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
require('dotenv').config();
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => console.log("app listening"));
const db = process.env.MONGODB_URI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongo listening"))
    .catch((err) => console.error(err));
