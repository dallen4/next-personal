import React from 'react';
import { MobileHeader } from '../components/blog/Header';
import Footer from '../components/blog/Footer';
import Head from '../components/Head';
import { DesktopNav } from './post';

export default ({ toggleSidebar }) => {
    return (
        <div id={'page-root'} className={'legal-page'}>
            <style jsx>{`
                .legal-page {
                    background-color: white;
                    display: grid;
                    grid-template-rows: minmax(70px, auto) minmax(50vh, auto) minmax(
                            250px,
                            auto
                        );
                    grid-template-columns: 0.1fr 1fr 0.1fr;
                    grid-template-areas:
                        'nav nav nav'
                        '. content .'
                        'footer footer footer';
                    row-gap: 30px;
                }

                .blog-header {
                    grid-area: nav;
                }

                .content {
                    grid-area: content;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }

                section {
                    padding: 20px 0;
                }

                p {
                    opacity: 0.7;
                }

                .footer {
                    grid-area: footer;
                }
            `}</style>
            <Head title={'Nieky Allen - Legal'} />
            {DesktopNav}
            <MobileHeader toggleSidebar={toggleSidebar} />
            <main className={'content'}>
                <h2>Legal</h2>
                <h3>Terms of Use</h3>
                <section id={'terms-of-use'}>
                    <p>{terms}</p>
                </section>

                <h3>Privacy Policy</h3>
                <section id={'privacy-policy'}>
                    <p>{privacyPolicy}</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const terms = `All content provided on this blog is for informational purposes only. The owner of this blog makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The owner will not be liable for any errors or omissions in this information nor for the availability of this information. The owner will not be liable for any losses, injuries, or damages from the display or use of this information. These terms and conditions of use are subject to change at any time and without notice.`;
const privacyPolicy = `We do not share personal information with third-parties nor do we store information we collect about your visit to this blog for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your internet browser's settings. Any personal information you provide (email, phone number) will be securely stored and never sold or intentionally distributed. This information will only be used to notify you of new content and features on this blog. We are not responsible for the republishing of the content found on this blog on other websites or media without our permission. This privacy policy is subject to change without notice.`;
