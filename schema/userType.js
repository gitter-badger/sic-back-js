import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

/**
 * We define our user type.
 *
 * This implements the following type system shorthand:
 *   type User {
 *     id: String!
 *     name: String
 *     firstName: String
 *   }
 */
const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the user.'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user.'
    },
    firstName: {
      type: GraphQLString,
      description: 'The first name of the user.'
    }
  })
});

export default userType;
