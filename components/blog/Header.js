import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavLinks from './NavLinks';
import CategoryNav from './CategoryNav';
import Icon from 'efflux-icons';

export const MobileHeader = ({ toggleSidebar }) => (
    <header id={'mobile-header'} className={'blog-header navbar'} style={{ backgroundColor: 'rgb(21,24,28)' }}>
        <div onClick={toggleSidebar} style={{ alignSelf: 'flex-start' }}>
            <Icon name={'Menu'} color={'white'} size={'35px'} />
            <img
                src={'/static/img/nieky-logo-2.svg'}
                height={'35px'}
                style={{ paddingLeft: '10px', }}
            />
        </div>
        {/* <nav
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
                            to: '/blog#about',
                        },
                        // {
                        //     label: 'Contact',
                        //     to: '/contact',
                        // },
                    ],
                ]}
            />
        </nav> */}
    </header>
);

const Header = () => {
    return (
        <header id={'desktop-header'} className={'blog-header'}>
            <Link href="/blog">
                <a style={{ alignSelf: 'flex-start' }} >
                    <img src={'/static/img/nieky-logo-2.svg'} height={'30px'} />
                </a>
            </Link>
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
                    activeWhite
                    linkSections={[
                        [
                            {
                                label: 'About',
                                to: '/blog#about',
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
