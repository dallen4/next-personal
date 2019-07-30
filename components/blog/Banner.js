import React from 'react';
import Router from 'next/router';
import Button from './Button';
import CategoryLink from './CategoryLink';
import Header from './Header';

let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Banner() {
    return (
        <div className={'banner'}>
            <style jsx>{`
                .post-title {
                    color: white;
                }

                h3, p {
                    color: rgb(129,129,129);
                }

                h3 {
                    font-weight: normal;
                }
            `}</style>
            <div
                className={'home-banner'}
                style={{
                    height: '100%',
                    borderBottomRightRadius: '45px',
                    overflow: 'hidden',
                    background: `url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`,
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        background:
                            'linear-gradient(to right, transparent, 25%, rgb(40,42,46))',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Header/>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <div
                            className={'banner-content'}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                alignItems: 'flex-start',
                            }}
                        >
                            <h1 className={'post-title'} >
                                Using Strapi to Streamline Your Development Time
                            </h1>
                            <h3
                                style={{
                                    color: 'rgba(255,255,255,0.7)',
                                }}
                            >
                                Breaking down your development timeline without reinventing the wheel.
                            </h3>
                            <div>
                                <p
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    {new Date('2019-07-06T02:33:23.940Z').toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })} &bull; In{' '}
                                </p>
                                <CategoryLink
                                    category={'music'}
                                />
                            </div>
                            <p
                                style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    lineHeight: '1.5rem',
                                }}
                            >
                                {`${content.substr(0, 240)}...`}
                            </p>
                            <Button
                                label={'Read More'}
                                color={'orange'}
                                onClick={() => Router.push('/')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
