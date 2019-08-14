import App, { Container } from 'next/app';
import React from 'react';
import '../styles/base.css';
import withClient from '../lib/client/withClient';
import { ApolloProvider } from 'react-apollo';
import Sidebar from 'react-sidebar';
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

export default withClient(MyApp);
