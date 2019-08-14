import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'efflux-icons';
import SocialLinks from './SocialLinks';
import CategoryNav from './CategoryNav';
import NavLinks from './NavLinks';

const SidebarMenu = ({ toggleSidebar }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgb(21,24,28)',
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    margin: '20px',
                    width: 'calc(100% - 40px)',
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <button
                    title={'close'}
                    onClick={toggleSidebar}
                    style={{
                        backgroundColor: 'transparent',
                        alignSelf: 'flex-end',
                    }}
                >
                    <Icon
                        name={'Close'}
                        color={'white'}
                    />
                </button>
                <div
                    style={{
                        padding: '15px',
                        height: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={'/static/img/nieky-logo-2.svg'}
                        height={'30px'}
                        style={{
                            padding: '12px',
                        }}
                    />
                    <h3
                        style={{
                            color: 'rgb(237,56,57)',
                            padding: '15px',
                            textAlign: 'center',
                        }}
                    >
                        Blog
                    </h3>
                    <style jsx>{`
                        ul li {
                            padding: 20px;
                        }
                    `}</style>
                    <CategoryNav
                        activeWhite
                        customStyles={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    />
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
                        customStyles={{
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
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
        </div>
    );
};

SidebarMenu.propTypes = {};

export default SidebarMenu;
