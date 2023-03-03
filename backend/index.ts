import dotenv from 'dotenv';
import express from 'express';

const app = express();
const port = '4000';

dotenv.config();
const PORT = process.env.PORT || port;


