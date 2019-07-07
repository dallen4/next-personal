import React from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { Query } from 'react-apollo';
import { POST } from '../lib/queries';
import { writePalette } from '../styles/colors';
import Footer from '../components/Footer';
import '../styles/read.css';
import Highlight from 'react-highlight.js';
import { FiArrowUp } from 'react-icons/fi';
import Head from '../components/Head';
import LoadingView from '../components/LoadingView';

const Post = (props) => {
    let { slug, pathname } = props;

    return (
        <Query query={POST} variables={{ slug }} notifyOnNetworkStatusChange>
            {({ data, loading, error, networkStatus }) => {
                if (true || networkStatus === 4) return <LoadingView/>;
                else if (error) return <p>{error.message}</p>;
                else {
                    let {
                        title,
                        publishedAt,
                        updatedAt,
                        category,
                        description,
                        body,
                    } = data.postBySlug;

                    let publishedAtObj = new Date(publishedAt);
                    let updatedAtObj = new Date(updatedAt);

                    let publishedString = `${publishedAtObj.toLocaleDateString(
                        'en-US',
                        {
                            month: '2-digit',
                            day: '2-digit',
                            year: '2-digit',
                        },
                    )}`;

                    let updatedString = `${updatedAtObj.toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: '2-digit',
                    })}`;

                    return (
                        <div className={'post-page'}>
                            <Head/>
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
                                <FiArrowUp
                                    className='button'
                                    onClick={() => {}}
                                    size={35}
                                    color='white'
                                    strokeWidth={'0.5px'}
                                />
                                <p style={{ padding: 0 }}>Top</p>
                            </div>
                            <header className={'title'}>
                                <Link href='/blog'>
                                    <p
                                        style={{
                                            cursor: 'pointer',
                                            color: writePalette.blue,
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        back to posts
                                    </p>
                                </Link>
                                <h1
                                    style={{
                                        marginTop: '2rem',
                                        marginBottom: '1rem',
                                        color: writePalette.lightBlue,
                                    }}
                                >
                                    {title}
                                </h1>
                                <p>{description}</p>
                                <p style={{ opacity: 0.8 }}>
                                    {publishedString} &#xB7; In{' '}
                                    <a
                                        style={{
                                            color: 'orange',
                                            fontStyle: 'italic',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {category}
                                    </a>
                                </p>
                                {updatedAtObj > publishedAtObj && (
                                    <p style={{ opacity: 0.8 }}>
                                        <span
                                            style={{
                                                color: writePalette.lightBlue,
                                            }}
                                        >
                                            last updated
                                        </span>{' '}
                                        {updatedString}
                                    </p>
                                )}
                            </header>
                            <main className={'content'}>
                                <Markdown
                                    options={{
                                        overrides: {
                                            div: {
                                                props: {
                                                    className: 'content',
                                                },
                                            },
                                            code: {
                                                component: ({
                                                    children,
                                                    ...props
                                                }) => {
                                                    if (props.className)
                                                        return (
                                                            <Highlight {...props}>
                                                                {children}
                                                            </Highlight>
                                                        );
                                                    else
                                                        return (
                                                            <code>{children}</code>
                                                        );
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {body}
                                </Markdown>
                            </main>
                            <Footer />
                        </div>
                    );
                }
            }}
        </Query>
    );
};

Post.getInitialProps = async ({ query, pathname }) => {
    return {
        pathname,
        slug: query.slug,
    };
}

export default Post;
