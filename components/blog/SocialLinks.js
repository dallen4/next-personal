import React from 'react';
import PropTypes from 'prop-types';
import {
    FaGithub,
    FaTwitter,
    FaSoundcloud,
} from 'react-icons/fa';
import Icon from 'efflux-icons';
import { FiMail } from 'react-icons/fi';

function SocialLinks(props) {

    let color = 'rgb(121,123,127)';

    let iconProps = {
        color,
        size: '20px',
    };

    return (
        <ul>
            <style jsx>{`
                ul {
                    margin-top: 35px;
                }

                li {
                    display: inline;
                }

                li:not(:last-child) {
                    padding-right: 25px;
                }
            `}</style>
            <li>
                <a href={'https://github.com/dallen4'} >
                    <FaGithub {...iconProps} />
                </a>
            </li>
            <li>
                <a href={'https://twitter.com/nieky_allen'} >
                    <FaTwitter {...iconProps} />
                </a>
            </li>
            <li>
                <a href={'https://instagram.com/nieky.m4a'} >
                    <Icon
                        name={'Instagram'}
                        color={color}
                        size={20}
                    />
                </a>
            </li>
            <li>
                <a href={'https://soundcloud.com/niekya'} >
                    <FaSoundcloud {...iconProps} />
                </a>
            </li>
            <li>
                <a href={'mailto:nieky.allen@gmail.com'} >
                    <FiMail {...iconProps} />
                </a>
            </li>
        </ul>
    );
}

SocialLinks.propTypes = {};

export default SocialLinks;
