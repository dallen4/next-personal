import React from 'react';
import Router from 'next/router';
import LoginForm from '../components/forms/LoginForm';
import { writePalette } from '../styles/colors';

export default () => (
    <div
        className={'fullscreen-container'}
        style={{
            backgroundColor: writePalette.gray,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}
    >
        <LoginForm onAuthComplete={() => Router.push('/write')} />
    </div>
);
