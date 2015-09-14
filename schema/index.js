import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import userType from './userType'

import { UserService } from '../services';

var Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    allUsers: {
      type: new GraphQLList(userType),
      resolve: () => {
        return UserService.findAll();
      }
    }
  }
});

export default new GraphQLSchema({
  query: Root
});
