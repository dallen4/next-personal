// PostList component
import React from 'react';
import { Query } from 'react-apollo';
import { LIST_POSTS } from '../../lib/queries';
import { stringToProper } from '../../lib/util';
import LoadingView from '../LoadingView';
import CategoryLink from './CategoryLink';

const sample = [
    {
        title: 'testing title',
        slug: 'testing-title',
        category: {
            title: 'technology'
        }
    }
];

export default ({ onPostClick }) => {

    const showPosts = (posts = sample) => (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
            }}
        >
            <style jsx>{`
                h3, p {
                    margin: 0;
                    padding: 0;
                }

                .post-item:hover {
                    cursor: pointer;
                    background-color: rgb(246,246,246);
                }
            `}</style>
            {posts.map(post => (
                <div
                    key={post.slug}
                    className={'post-item'}
                    style={{
                        flex: 0.5,
                        minHeight: '120px',
                        padding: '10px 25px 10px 25px',
                        borderRadius: '6px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                    onClick={() => onPostClick(post.slug)}
                >
                    {post.image && (
                        <img
                            src="/static/img/nieky-1871.jpg"
                            style={{
                                height: '110px',
                                width: 'auto',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                    <div
                        style={{
                            flex: 1,
                            height: 'calc(100% - 20px)',
                            paddingLeft: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h3>{post.title}</h3>
                        <p style={{ color: 'rgb(129,129,129)', }} >
                            {post.description}
                        </p>
                        <div>
                            <p>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })} &bull; In{' '}
                            </p>
                            <CategoryLink
                                category={'technology'}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <Query
            query={LIST_POSTS}
            notifyOnNetworkStatusChange
            errorPolicy={'all'}
        >
            {({ data, loading, error, networkStatus }) => {
                let isLoading = loading || networkStatus === 4;
                let noPosts = Boolean(isLoading || error || (data.posts && data.posts.length === 0));
                let renderMore = !noPosts && data.posts && data.posts.length % 10 !== 0;
                
                return (
                    <div
                        style={{
                            flex: 1,
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}
                    >
                        {noPosts ? (
                            <div
                                style={{
                                    height: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {isLoading || error ? (
                                    <LoadingView
                                        fullscreen={false}
                                        loading={isLoading}
                                        message={'Loading posts...'}
                                        error={Boolean(error)}
                                        errorMsg={'Error loading posts...'}
                                    />
                                ) : (
                                    <h3
                                        style={{ color: 'rgb(129,129,129)' }}
                                    >
                                        No posts yet, check back soon.
                                    </h3>
                                )}
                            </div>
                        ) : showPosts(data.posts)}
                        {renderMore && (
                            <p style={{ alignSelf: 'center', color: 'rgb(237,56,57)', }} >more</p>
                        )}
                    </div>
                );
            }}
        </Query>
    );

};
