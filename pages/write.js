import React from 'react';
import Link from 'next/link';
import { styles } from '../styles/write';
import EditPane from '../components/EditPane';
import { writePalette } from '../styles/colors';
import withAuth from '../components/withAuth';

export default class Write extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container} >
                <style global jsx>{`
                    body {
                        background: ${writePalette.green};
                    }
                `}</style>
                <h1 style={{ margin: 0, color: writePalette.white }} >Write</h1>
                <Link  href='/' >
                    <a style={{ color: writePalette.lightBlue }} >go home</a>
                </Link>
                <EditPane/>
            </div>
        );
    }
}

// export default withAuth(Write);
