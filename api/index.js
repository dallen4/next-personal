// graphql api
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

// import typeDefs and resolvers
const typeDefs = importSchema('api/schema.graphql');
const resolvers = require('./resolvers');

// create graphql schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// init graphql handler
const graphqlApi = new ApolloServer({
    schema,
    tracing: true,
    playground: {
        endpoint: '/api',
        settings: {
            'editor.theme': 'dark',
        },
        tabs: [
            {
                endpoint: '/api',
            },
        ],
    },
    subscriptions: {
        onConnect: () => console.log('connected...'),
    },
});

module.exports = { graphqlApi };
