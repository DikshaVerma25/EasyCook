import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull,  GraphQLID} from "graphql";
import {User} from "../models/user"

const UserType : GraphQLObjectType<User> = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID)},
        FirstName:{type: GraphQLString},
        LastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    }),
});


