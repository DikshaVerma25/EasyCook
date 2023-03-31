import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';

// const UserType = new GraphQLObjectType({
//     name : 'User',
//     fields: () => ({
//         id: {type : GraphQLString},
//         FirstName: {type : GraphQLString},
//         LastName: {type : GraphQLString},
//         email: {type: GraphQLString},
//         password: {type : GraphQLString}
//     })
// });

// const QueryType = new GraphQLObjectType({
//     name: 'Query',
//     fields: (): GraphQLFieldConfigMapThunk => ({
//         user: {
//             type: UserType,
//             args: {
//                 id: GraphQLString
//             },
//             resolve: getUser

//             }
//         }
//     })
// })

