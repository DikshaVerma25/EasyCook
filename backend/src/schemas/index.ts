import { gql } from 'apollo-server-express';
import { userTypeDefs } from './user';

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String!
  }

  ${userTypeDefs}
`;
