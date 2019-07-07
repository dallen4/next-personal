import React from 'react';
import { FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';
`121,123,127`
export default () => {
    let iconProps = {
        color: 'rgb(121,123,127)',
    };

    return (
        <footer className={'footer'} >
            <div>
                <img
                    src={'/static/img/nieky-logo-2.svg'}
                    height={'35px'}
                />
                <ul>
                    <li>
                        <a>
                            <FaGithub
                                {...iconProps}
                            />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FaFacebookF
                                {...iconProps}
                            />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FaTwitter
                                {...iconProps}
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <p
                style={{
                    fontSize: '0.8rem'
                }}
            >
                &copy; Nieky Allen 2019
            </p>
        </footer>
    );
};
