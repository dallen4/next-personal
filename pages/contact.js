import React from 'react';
import { MobileHeader } from '../components/blog/Header';
import Footer from '../components/blog/Footer';
import Head from '../components/Head';
import { DesktopNav } from './post';
import SocialLinks from '../components/blog/SocialLinks';

export default ({ toggleSidebar }) => {
    return (
        <div id={'page-root'} className={'contact-page'}>
            <style jsx>{`
                .contact-page {
                    display: grid;
                    background-color: white;
                    grid-template-rows: minmax(70px, auto) minmax(50vh, 1fr) minmax(250px, auto);
                    grid-template-columns: 0.2fr 1fr 0.2fr;
                    grid-template-areas:
                        'nav nav nav'
                        '. content .'
                        'footer footer footer';
                    height: 100%;
                    width: 100%;
                }

                .blog-header {
                    grid-area: nav;
                }

                .content {
                    grid-area: content;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h2 {
                    margin: 0;
                    opacity: 0.7;
                }

                .footer {
                    grid-area: footer;
                }
            `}</style>
            <Head title={'Nieky Allen - Contact'} />
            {DesktopNav}
            <MobileHeader
                toggleSidebar={toggleSidebar}
            />
            <main className={'content'} >
                <h2>Contact Nieky</h2>
                <SocialLinks/>
            </main>
            <Footer/>
        </div>
    );
};
