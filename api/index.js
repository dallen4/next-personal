// graphql api
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

// import typeDefs and resolvers
const typeDefs = importSchema('api/schema.graphql');
const resolvers = require('./resolvers');

const { decodeToken } = require('./utils');

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
    context: ({ req }) => {
        let user = null;

        if (req.headers['x-auth']) {
            try {
                user = decodeToken(req.headers['x-auth']);
            } catch (err) {
                throw new AuthenticationError('Invalid ID token provided');
            }
        }

        return { user };
    },
    subscriptions: {
        path: '/api',
        onConnect: () => console.log('connected...'),
    },
});

module.exports = { graphqlApi };
