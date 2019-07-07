import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let client = null;

if (!process.browser)
    global.fetch = fetch;

const create = initialState => {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: new HttpLink({
            uri: 'http://localhost:1337/graphql',
            credentials: 'same-origin'
        }),
        cache: new InMemoryCache().restore(initialState || {}),
    });
};

export default function initApollo (initialState) {
    if (!process.browser)
        return create(initialState);

    if (!client)
        client = create(initialState);

    return client;
}
