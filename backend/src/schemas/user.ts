import { gql } from 'apollo-server-express';
import { User } from '../models/user';

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    updateUser(id: ID!, email: String!, password: String!): User!
    deleteUser(id: ID!): User!
  }
`;

export const userResolvers = {
  Query: {
    async users() {
        return await User.find();     
          
    },
    async user(parent: any, args: any) {
      return await User.findById(args.id);
    },
  },
  Mutation: {
    async createUser(parent: any, args: any) {
      const { email, password } = args;
      const user = new User({ email, password });
      await user.save();
      return user;
    },
    async updateUser(parent: any, args: any) {
      const { id, email, password } = args;
      const user = await User.findByIdAndUpdate(id, { email, password });
      return user;
    },
    async deleteUser(parent: any, args: any) {
        const { id } = args;
        const user = await User.findByIdAndDelete(id);
        return user;
      },
  },
};
