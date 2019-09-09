import React from 'react';
import Router from 'next/router';
import Head from '../components/Head';
import PostList from '../components/blog/PostList';
import '../styles/blog.css';
import { FiArrowUp } from 'react-icons/fi';
import SubscribeButton from '../components/blog/SubscribeButton';
import Banner from '../components/blog/Banner';
import Footer from '../components/blog/Footer';
import CategoryNav from '../components/blog/CategoryNav';
import ImageCaption from '../components/blog/ImageCaption';

const Blog = ({ category, toggleSidebar }) => {
    return (
        <div id={'page-root'} className={'blog-page'}>
            <Head title={'Nieky Allen - Blog'} />
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
                    <CategoryNav />
                </div>
                <PostList category={category} />
            </main>
            <section id={'about'} className={'about-me'}>
                <div className={'about-content'}>
                    <div style={{ float: 'left' }}>
                        <img
                            alt={'Nieky Allen by Jena Snelling'}
                            src={
                                'https://res.cloudinary.com/jenasnelling/image/upload/c_scale,fl_progressive,w_900,q_85/v1567990111/05222019_NAllen-24_wmujib.jpg'
                            }
                        />
                        <ImageCaption text={'By Jena Snelling'} />
                    </div>
                    <div style={{ maxWidth: '96%' }}>
                        <h1>About Me</h1>
                        <p style={{ paddingTop: '10px', opacity: 0.7 }}>
                            If you enjoy writing in a variety of forms and topic areas
                            that might include poetry, music, technology, think pieces,
                            and more, then you might be in the right place. I have thought
                            about making a blog at least a dozen times and decided to take
                            the leap after some encouragement from friends and colleagues.
                            <br />
                            <br />
                            Who am I? I’m a techy, poet & lyricist, software engineer,
                            educator, entrepreneur, and hip-hop head who is constantly
                            trying to discover new ways to combine my love for music with
                            my love for technology. I grew up in Kansas City, but moved to
                            Chicago for college where I received a B.S. in Software
                            Engineering with minors in Communications and Computer Crime &
                            Forensics and a M.S. in Software Engineering from Loyola
                            University Chicago.
                            <br />
                            <br />I hope you like what you read and even if you don’t,
                            thank you for giving it a chance. If you have any questions,
                            comments, or requests for post topics or content suggestions,
                            please don’t hesitate to contact me on social media or you can
                            always email me.
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
};

export default Blog;
