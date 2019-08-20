import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import withClient from '../lib/client/withClient';
import { ApolloProvider } from 'react-apollo';
import withGAnalytics from 'next-ga';
import Sidebar from 'react-sidebar';
import '../styles/base.css';
import SidebarMenu from '../components/blog/SidebarMenu';

class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
        };
    }

    toggleSidebar = () => this.setState({ sidebarOpen: !this.state.sidebarOpen });

    render() {
        const { Component, pageProps, client } = this.props;
        return (
            <Container>
                <ApolloProvider client={client} >
                        <Sidebar
                            sidebarClassName={'sidebar'}
                            sidebar={<SidebarMenu toggleSidebar={this.toggleSidebar} />}
                            open={this.state.sidebarOpen}
                            onSetOpen={this.toggleSidebar}
                        >
                            <Component
                                {...pageProps}
                                toggleSidebar={this.toggleSidebar}
                            />
                        </Sidebar>
                </ApolloProvider>
            </Container>
        );
    }
}

const AppWithApollo = withClient(MyApp);
const AppWithAnalytics = withGAnalytics(process.env.GOOGLE_ANALYTICS_ID, Router)(AppWithApollo);

export default AppWithAnalytics;
