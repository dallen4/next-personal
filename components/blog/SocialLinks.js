import React from 'react';
import PropTypes from 'prop-types';
import {
    FaGithub,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import Icon from 'efflux-icons';

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
                <a>
                    <FaGithub {...iconProps} />
                </a>
            </li>
            <li>
                <a>
                    <FaFacebookF {...iconProps} />
                </a>
            </li>
            <li>
                <a>
                    <FaTwitter {...iconProps} />
                </a>
            </li>
            <li>
                <a>
                    <Icon
                        name={'Instagram'}
                        color={color}
                        size={20}
                    />
                </a>
            </li>
        </ul>
    );
}

SocialLinks.propTypes = {};

export default SocialLinks;
