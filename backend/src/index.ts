import { ApolloServer } from 'apollo-server-express';
import express, { Application } from "express";
const mongoose = require('mongoose');
require('dotenv').config();


const app: Application = express();
const port: number = 3000;

app.listen(port, () => console.log("app listening"));

const db: string = process.env.MONGODB_URI!;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Mongo listening"))
    .catch((err: Error) => console.error(err));