import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import CategoryNav from './CategoryNav';
import Sidebar from 'react-sidebar';

export const MobileHeader = (
    <header id={'mobile-header'} className={'blog-header navbar'}>
        <img src={'/static/img/nieky-logo-2.svg'} height={'35px'} />
        <nav
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <CategoryNav />
            <NavLinks
                renderDot
                linkSections={[
                    [
                        {
                            label: 'About',
                            to: '/about',
                        },
                        {
                            label: 'Contact',
                            to: '/contact',
                        },
                    ],
                ]}
            />
        </nav>
    </header>
);

const Header = () => {
    if (false) return MobileHeader;
    return (
        <header id={'desktop-header'} className={'blog-header'}>
            <img src={'/static/img/nieky-logo-2.svg'} height={'35px'} />
            <nav
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <CategoryNav activeWhite />
                <NavLinks
                    renderDot
                    linkSections={[
                        [
                            {
                                label: 'About',
                                to: '/about',
                            },
                            {
                                label: 'Contact',
                                to: '/contact',
                            },
                        ],
                    ]}
                />
            </nav>
        </header>
    );
};

export default Header;
