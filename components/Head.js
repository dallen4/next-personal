import React from 'react';
import Head from 'next/head';

export default ({ title }) => (
    <Head>
        <title>{title || 'Nieky Allen'}</title>
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="personal website for Nieky Allen" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
);
