const ApolloServer = require('apollo-server-express');
const { express, Application } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import jwt from 'jsonwebtoken';

const app = express();

const port: number = 3000;
const JWT_SECRET: string = process.env.JWT_SECRET!;


app.listen(port, () => console.log("app listening"));

const db: string = process.env.MONGODB_URI!;

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
          throw new Error('JWT_SECRET is not defined');
        }
        const { userId } = jwt.verify(token, JWT_SECRET) as { userId: string };
        return { userId };
      } catch (err) {
        throw Error('Invalid token');
      }
    },
  });
  await server.start();
  server.applyMiddleware({ app });
})();

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo listening"))
  .catch((err: Error) => console.error(err));
