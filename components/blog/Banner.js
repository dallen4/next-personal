import React from 'react';
import Router from 'next/router';
import Button from './Button';
import CategoryLink from './CategoryLink';
import Header, { MobileHeader } from './Header';
import { Query } from 'react-apollo';
import { LIST_POSTS } from '../../lib/queries';
import LoadingView from '../LoadingView';

const postPlaceholder = {
    title: 'Welcome!',
    description: 'This is a placeholder post for the featured banner.',
    slug: '',
    publishedAt: Date.now(),
    tag: {
        name: 'general',
    },
    body: 'Thanks for checking out my site! There will be posts up soon.',
};

export default function Banner({ toggleSidebar }) {
    return (
        <div className={'banner'}>
            <style jsx>{`
                .post-title {
                    color: white;
                }

                h3,
                p {
                    color: rgb(129, 129, 129);
                }

                h3 {
                    font-weight: normal;
                }
            `}</style>
            <Query
                query={LIST_POSTS}
                notifyOnNetworkStatusChange
                fetchPolicy={'cache-first'}
            >
                {({ data, loading, error, networkStatus }) => {
                    if (loading || networkStatus === 4 || (error && !error.networkError))
                        return (
                            <div
                                className={'home-banner'}
                                style={{
                                    height: '100%',
                                    borderBottomRightRadius: '45px',
                                    overflow: 'hidden',
                                    background: `url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)`,
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
                                    <Header />
                                    <MobileHeader
                                        toggleSidebar={toggleSidebar}
                                    />
                                    <LoadingView
                                        dark={true}
                                        fullscreen={false}
                                        loading={loading}
                                        error={error}
                                        errorMsg={'Issue fetching latest post...'}
                                    />
                                </div>
                            </div>
                        );
                    else {

                        let featuredPost = postPlaceholder;

                        if (data && data.posts.length > 0)
                            featuredPost = data.posts[0];

                        let {
                            title,
                            description,
                            slug,
                            imageUrl,
                            publishedAt,
                            tag: { name: tagName },
                            body,
                        } = featuredPost;

                        let content = `${body.substr(0, 280)}...`;

                        return (
                            <div
                                className={'home-banner'}
                                style={{
                                    height: '100%',
                                    borderBottomRightRadius: '45px',
                                    overflow: 'hidden',
                                    background: `url('${
                                        imageUrl ||
                                        'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                                    }')`,
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
                                    <Header />
                                    <MobileHeader
                                        toggleSidebar={toggleSidebar}
                                    />
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
                                            <h1 className={'post-title'}>
                                                {title}
                                            </h1>
                                            <h3
                                                style={{
                                                    color: 'rgba(255,255,255,0.7)',
                                                }}
                                            >
                                                {description}
                                            </h3>
                                            <div>
                                                <p
                                                    style={{
                                                        display: 'inline',
                                                    }}
                                                >
                                                    {new Date(publishedAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}{' '}
                                                    &bull; In{' '}
                                                </p>
                                                <CategoryLink category={tagName} />
                                            </div>
                                            <p
                                                className={'banner-post-body'}
                                                style={{
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: '1.5rem',
                                                }}
                                            >
                                                {content}
                                            </p>
                                            <Button
                                                label={'Read More'}
                                                color={'orange'}
                                                onClick={() => Router.push(`/post/${slug}`)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }}
            </Query>
        </div>
    );
}
