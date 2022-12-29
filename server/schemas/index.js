const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-express')
module.exports = { typeDefs, resolvers };