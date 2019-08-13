import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { POST } from '../lib/queries';
import { FiArrowUp } from 'react-icons/fi';
import Head from '../components/Head';
import LoadingView from '../components/LoadingView';
import Footer from '../components/blog/Footer';
import PostBody from '../components/blog/PostBody';
import '../styles/blog.css';
import { formatDate } from '../lib/util';
import CategoryLink from '../components/blog/CategoryLink';
import NavLinks from '../components/blog/NavLinks';
import CategoryNav from '../components/blog/CategoryNav';
import { MobileHeader } from '../components/blog/Header';

const DesktopNav = (
    <nav id={'desktop-header'} className={'navbar'}>
        <Link href="/blog">
            <a>
                <img src={'/static/img/nieky-logo-2.svg'} height={'30px'} />
            </a>
        </Link>

        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
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
        </div>
    </nav>
);

const Post = ({ slug, toggleSidebar }) => (
    <Query
        query={POST}
        variables={{ slug }}
        notifyOnNetworkStatusChange
        fetchPolicy={'cache-first'}
    >
        {({ data, loading, error, networkStatus }) => {
            if (loading || networkStatus === 4 || error || data.postBySlug === null)
                return (
                    <LoadingView
                        fullscreen={true}
                        loading={loading}
                        error={error || data.postBySlug === null}
                        errorMsg={'Issue fetching post...'}
                    />
                );
            else {
                let {
                    title,
                    publishedAt,
                    updatedAt,
                    tag,
                    description,
                    body,
                    imageUrl,
                } = data.postBySlug;

                let publishedAtObj = new Date(publishedAt);
                let updatedAtObj = new Date(updatedAt);

                let publishedString = formatDate(publishedAt);

                let updatedString = formatDate(updatedAt);

                return (
                    <div id={'page-root'} className={'post-page'}>
                        <Head />
                        <link
                            rel='stylesheet'
                            href='https://highlightjs.org/static/demo/styles/railscasts.css'
                        />
                        <div
                            style={{
                                position: 'fixed',
                                bottom: 0,
                                right: 0,
                                padding: 0,
                                marginBottom: '8px',
                                borderTopLeftRadius: '50%',
                                borderBottomLeftRadius: '50%',
                                backgroundColor: 'rgba(180,180,180,0.6)',
                            }}
                        >
                            <a href={'#page-root'} >
                            <FiArrowUp
                                className={'button'}
                                size={35}
                                color='white'
                                strokeWidth={'0.5px'}
                            />
                            <p style={{ padding: 0 }}>Top</p>
                            </a>
                        </div>
                        {MobileHeader({ toggleSidebar: toggleSidebar })}
                        {DesktopNav}
                        <header className={'title'}>
                            <Link href='/blog'>
                                <a
                                    style={{
                                        color: 'rgb(237,56,57)',
                                    }}
                                >
                                    <p>back to posts</p>
                                </a>
                            </Link>
                            <h1
                                style={{
                                    marginTop: '2rem',
                                    marginBottom: '0.7rem',
                                    color: 'rgb(21,24,28)',
                                }}
                            >
                                {title}
                            </h1>
                            <p
                                style={{
                                    paddingBottom: '4px',
                                    color: 'rgb(129,129,129)',
                                }}
                            >
                                {description}
                            </p>
                            <p
                                style={{
                                    display: 'inline',
                                    opacity: 0.8,
                                    color: 'rgb(129,129,129)',
                                }}
                            >
                                {publishedString} &bull; In{' '}
                            </p>
                            <CategoryLink category={tag.name} />
                            {updatedAtObj > publishedAtObj && (
                                <p
                                    style={{
                                        opacity: 0.8,
                                        textDecoration: 'none',
                                        color: 'rgb(129,129,129)',
                                    }}
                                >
                                    last updated {updatedString}
                                </p>
                            )}
                        </header>
                        <section className={'banner-img'}>
                            <img
                                src={
                                    imageUrl ||
                                    'https://images.unsplash.com/photo-1565094919597-70e3022e7c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'
                                }
                                width={'100%'}
                            />
                        </section>
                        <main className={'content post-content'}>
                            <PostBody body={body} />
                        </main>
                        <Footer />
                    </div>
                );
            }
        }}
    </Query>
);

Post.getInitialProps = async ({ query }) => {
    return {
        slug: query.slug,
    };
};

export default Post;
