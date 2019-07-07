import React from 'react';
import {
    FiGithub,
    FiInstagram,
    FiTwitter,
    FiMail
} from 'react-icons/fi';
import { FaSoundcloud } from 'react-icons/fa';
import { styles } from './styles';

export default () => (
    <footer className={'footer'} style={styles.footer} >
        <div style={styles.linkContainer} >
            <a
                href="mailto:nieky.allen@gmail.com"
                style={styles.link}
            >
                <FiMail {...styles.icon} />
            </a>
            <a
                href="https://github.com/dallen4"
                style={styles.link}
            >
                <FiGithub {...styles.icon} />
            </a>
            <a
                href="https://soundcloud.com/niekya"
                style={styles.link}
            >
                <FaSoundcloud {...styles.icon} />
            </a>
            <a
                href="https://instagram.com/nieky.m4a"
                style={styles.link}
            >
                <FiInstagram {...styles.icon} />
            </a>
            <a
                href="https://twitter.com/nieky_allen"
                style={styles.link}
            >
                <FiTwitter {...styles.icon} />
            </a>
        </div>
        <div style={styles.copyrightContainer} >
            <p className="code" style={styles.copyright} >
                copyright &copy; nieky allen 2019.
            </p>
        </div>
    </footer>
);
