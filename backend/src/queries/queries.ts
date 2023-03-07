import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import {User} from "../models/user"

const QueryType: GraphQLObjectType = new GraphQLObjectType({
    name: "Query",
    fields: {
      user: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
        },
        resolve: async (_, { email }) => {
          const user = await User.findOne({ email });
          return user;
        },
      },
    },
});