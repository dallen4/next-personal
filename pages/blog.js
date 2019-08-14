import React from 'react';
import Router from 'next/router';
import Head from '../components/Head';
import PostList from '../components/blog/PostList';
import '../styles/blog.css';
import { FiArrowUp } from 'react-icons/fi';
import NavLinks from '../components/blog/NavLinks';
import SubscribeButton from '../components/blog/SubscribeButton';
import Banner from '../components/blog/Banner';
import Footer from '../components/blog/Footer';
import CategoryNav from '../components/blog/CategoryNav';
import ImageCaption from '../components/blog/ImageCaption';

const Blog = ({ category, toggleSidebar }) => {
        return (
            <div id={'page-root'} className={'blog-page'}>
                <Head/>
                <Banner toggleSidebar={toggleSidebar} />
                <main
                    className={'content'}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            minWidth: '30%',
                            maxWidth: 'auto',
                            alignSelf: 'flex-end',
                            paddingBottom: '20px',
                            overflowX: 'scroll',
                        }}
                    >
                        <CategoryNav/>
                    </div>
                    <PostList category={category} />
                </main>
                <section id={'about'} className={'about-me'}>
                    <div className={'about-content'} >
                        <div>
                            <img
                                alt={'Nieky Allen by Jena Snelling'}
                                src={'https://res.cloudinary.com/jenasnelling/image/upload/c_scale,fl_progressive,w_900,q_85/v1565484375/05222019_NAllen-31_twse6f.jpg'}
                            />
                            <ImageCaption text={'By Jena Snelling'} />
                        </div>
                        <div style={{ width: '96%', }} >
                            <h1>About Me</h1>
                            <p style={{ paddingTop: '10px', opacity: 0.7, maxWidth: '100%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={'subscribe'}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            color: 'rgb(38,38,38)',
                        }}
                    >
                        Keep Reading
                    </h1>
                    <p style={{ textAlign: 'center' }}>
                        Subscribe to your favorite topics and be notified of
                        <br />
                        new blog posts
                    </p>

                    <div
                        style={{
                            height: '3px',
                            width: '70px',
                            backgroundColor: 'rgb(237,56,57)',
                        }}
                    />
                    <SubscribeButton />
                </section>
                <Footer />
            </div>
        );
};

Blog.getInitialProps = async ({ query, pathname }) => {
    return {
        pathname,
        category: query.category,
    };
}

export default Blog;
