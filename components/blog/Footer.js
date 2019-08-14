import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default () => {

    let color = 'rgb(121,123,127)';

    let logo = (
        <img
            src={'/static/img/nieky-logo-2.svg'}
            height={'35px'}
        />
    );

    const desktopFooter = (
        <div id={'footer-std'} className={'footer-content'} >
            <div
                style={{
                    flex: 2,
                    display: 'inherit',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                {logo}
                <SocialLinks/>
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'inherit',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'rgb(121,123,127)',
                }}
            >
                <style jsx>{`
                    li {
                        padding: 7px 0;
                    }
                `}</style>
                <div style={{ flex: 1, alignSelf: 'flex-start' }} >
                    <h3
                        style={{
                            color: 'rgb(237,56,57)',
                            paddingBottom: '7px',
                        }}
                    >
                        Blog
                    </h3>
                    <ul>
                        <li>
                            <Link href={'/about'} >
                                <a className={'footer-link'} >
                                    <p>About</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} >
                                <a className={'footer-link'} >
                                    <p>Contact</p>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link>
                                <a className={'footer-link'} >Sitemap</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div style={{ flex: 1, alignSelf: 'flex-start' }} >
                    <h3
                        style={{
                            color: 'rgb(237,56,57)',
                            paddingBottom: '7px',
                        }}
                    >
                        Legal
                    </h3>
                    <ul>
                        <li>
                            <Link href={'/legal#terms-of-use'} >
                                <a className={'footer-link'} >
                                    <p>Terms of Use</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/legal#privacy-policy'} >
                                <a className={'footer-link'} >
                                    <p>Privacy Policy</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const mobileFooter = (
        <div id={'footer-mobile'} className={'footer-content'} >
            <div style={{ flex: 1, paddingBottom: '30px', }} >
                {logo}
            </div>
            <div
                style={{
                    width: '100%',
                    flex: 1,
                    display: 'inherit',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    color: 'rgb(121,123,127)',
                }}
            >
                <style jsx>{`
                    li {
                        padding: 7px 0;
                    }
                `}</style>
                <div style={{ flex: 1, alignSelf: 'flex-start' }} >
                    <h3
                        style={{
                            color: 'rgb(237,56,57)',
                            paddingBottom: '7px',
                        }}
                    >
                        Blog
                    </h3>
                    <ul>
                        <li>
                            <Link href={'/about'} >
                                <a className={'footer-link'} >
                                    <p>About</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} >
                                <a className={'footer-link'} >
                                    <p>Contact</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: 1, alignSelf: 'flex-start' }} >
                    <h3
                        style={{
                            color: 'rgb(237,56,57)',
                            paddingBottom: '7px',
                        }}
                    >
                        Legal
                    </h3>
                    <ul>
                    <li>
                            <Link href={'/legal#terms-of-use'} >
                                <a className={'footer-link'} >
                                    <p>Terms of Use</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/legal#privacy-policy'} >
                                <a className={'footer-link'} >
                                    <p>Privacy Policy</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    display: 'inherit',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: '30px 0',

                }} 
            >
                <SocialLinks/>
            </div>
        </div>
    );

    return (
        <footer className={'footer'} >
            {desktopFooter}
            {mobileFooter}
            <p
                style={{
                    // display: 'block',
                    fontSize: '0.8rem',
                    color: 'rgb(121,123,127)',
                }}
            >
                &copy; Nieky Allen 2019
            </p>
        </footer>
    );
};
