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

const Blog = (props) => {
    let { category, pathname } = props;
        return (
            <div className={'blog-page'}>
                <Head/>
                <Banner/>
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
                        }}
                    >
                        <NavLinks
                            linkSections={[
                                [
                                    {
                                        label: 'All',
                                        to: '/blog',
                                    },
                                    {
                                        label: 'Technology',
                                        to: '/blog/technology',
                                    },
                                    {
                                        label: 'Lifestyle',
                                        to: '/blog/lifestyle',
                                    },
                                ],
                            ]}
                        />
                    </div>
                    <PostList
                        onPostClick={(slug) => Router.push(`/post/${slug}`)}
                    />
                </main>
                <section className={'about-me'}>
                    <div
                        style={{
                            height: 'calc(100% - 100px)',
                            backgroundColor: 'rgb(246,246,246)',
                            borderTopLeftRadius: '35px',
                            borderBottomLeftRadius: '35px',
                            padding: '45px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <img
                            src="/static/img/nieky-1871.jpg"
                            style={{
                                height: '300px',
                                width: 'auto',
                                margin: '-95px 25px 0 0',
                                borderRadius: '7px',
                            }}
                        />
                        <div>
                            <h1>About Me</h1>
                            <p style={{ opacity: 0.7, maxWidth: '80%' }}>
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
