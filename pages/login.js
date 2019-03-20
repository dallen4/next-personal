import React from 'react';
import Router from 'next/router';
import LoginForm from '../components/forms/LoginForm';

export default () => (
    <LoginForm
        onAuthComplete={() => Router.push('/write')}
    />
);
