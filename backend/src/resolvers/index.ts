import { userResolvers } from '../schemas/user';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },

  ...userResolvers,
};
