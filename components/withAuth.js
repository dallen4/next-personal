import React, { Component } from 'react';
import Router from 'next/router';
import { isAuthenticated } from '../lib/auth';

export default Child => (
    class withAuth extends Component {
        componentDidMount() {
            console.log(isAuthenticated())
            if (!isAuthenticated()) Router.replace('/');
        }

        render() {
            return <Child {...this.props} />;
        }
    }
)
