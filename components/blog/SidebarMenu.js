import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';

const SidebarMenu = ({ toggleSidebar }) => {
    return (
        <div style={{ backgroundColor: 'rgb(21,24,28)', width: '100%', height: '100vh' }} >
            <img src={'/static/img/nieky-logo-2.svg'} height={'30px'} />
            <h1>hello</h1>
            <SocialLinks/>
            <p
                style={{
                    // display: 'block',
                    fontSize: '0.8rem',
                    color: 'rgb(121,123,127)',
                }}
            >
                &copy; Nieky Allen 2019
            </p>
        </div>
    );
};

SidebarMenu.propTypes = {};

export default SidebarMenu;
