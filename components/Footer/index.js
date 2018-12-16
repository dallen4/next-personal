import React from 'react';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaSoundcloud } from 'react-icons/fa';

export default () => (
    <footer style={{ height: '90px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                <p className="code" style={{ margin: 0, padding: 0, color: 'white' }} >copyright &copy; dominique allen 2018.</p>
        </div>
        <div style={{ paddingLeft: '20%', paddingRight: '10%', flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
            <FiGithub
                color="white"
                size={21}
                style={{ display: 'inline' }}
            />
            <FaSoundcloud
                color="white"
                size={21}
                style={{ display: 'inline' }}
            />
            <FiInstagram
                color="white"
                size={21}
                style={{ display: 'inline' }}
            />
            <FiTwitter
                color="white"
                size={21}
                style={{ display: 'inline' }}
            />
        </div>
    </footer>
);
