import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'CardQuery',
    fields: {
      viewer: {
        type: GraphQLString,
        resolve() {
          return '1'
        }
      }
    }
  })
})

export default schema
