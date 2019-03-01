import React from 'react';
import Link from 'next/link';
import getClient from '../lib/client/init';
import { styles } from '../styles/write';
import EditPane from '../components/EditPane';
import { colorPalette } from '../styles/colors';

const client = getClient();

export default () => (
    <div style={styles.container} >
        <style global jsx>{`
            body {
                background: ${colorPalette.green};
            }
        `}</style>
        <h1 style={{ margin: 0, color: colorPalette.white }} >Write</h1>
        <Link  href='/' >
            <a style={{ color: colorPalette.lightBlue }} >go home</a>
        </Link>
        <EditPane/>
    </div>
)
