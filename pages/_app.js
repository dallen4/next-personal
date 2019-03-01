import App, { Container } from 'next/app';
import React from 'react';
import '../styles/base.css';
import withClient from '../lib/client/withClient';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
    render() {
        const { Component, pageProps, client } = this.props;
        return (
            <Container>
                <ApolloProvider client={client} >
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}

export default withClient(MyApp);
