import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import ReactGA from 'react-ga';
import { ApolloProvider } from '@apollo/react-hooks';
import Sidebar from 'react-sidebar';
import withClient from '../lib/client/withClient';
import '../styles/base.css';
import SidebarMenu from '../components/blog/SidebarMenu';

const logPageView = (url) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
};

class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
        };
    }

    componentDidMount() {
        if (!window.GA_INITIALIZED && process.env.NODE_ENV === 'production') {
            ReactGA.initialize('UA-85988999-2');
            window.GA_INITIALIZED = true;
            logPageView(window.location.pathname);
            Router.onRouteChangeComplete = (url) => {
                logPageView(url);
            };
        }
    }

    toggleSidebar = () => this.setState({ sidebarOpen: !this.state.sidebarOpen });

    render() {
        const { Component, pageProps, client } = this.props;
        return (
            <Container>
                <ApolloProvider client={client}>
                    <Sidebar
                        sidebarClassName={'sidebar'}
                        sidebar={<SidebarMenu toggleSidebar={this.toggleSidebar} />}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.toggleSidebar}
                    >
                        <Component {...pageProps} toggleSidebar={this.toggleSidebar} />
                    </Sidebar>
                </ApolloProvider>
            </Container>
        );
    }
}

const AppWithApollo = withClient(MyApp);

export default AppWithApollo;
