import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull,  GraphQLID} from "graphql";
import {IUser} from "../models/user"

const UserType : GraphQLObjectType<IUser> = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID)},
        FirstName:{type: GraphQLString},
        LastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    }),
});


