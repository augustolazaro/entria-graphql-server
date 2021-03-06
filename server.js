import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './data/schema'

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(4000)
console.log('Running GraphQL API server at localhost:4000/graphql')
