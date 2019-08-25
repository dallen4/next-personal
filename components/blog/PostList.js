// PostList component
import React from 'react';
import { LIST_POSTS, POSTS_BY_TAG } from '../../lib/queries';
import LoadingView from '../LoadingView';
import '../../styles/blog.css';
import PostItem from './PostItem';
import { NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default ({ category }) => {

    let queryConfig = {
        query: LIST_POSTS,
        options: {
            notifyOnNetworkStatusChange: true,
            errorPolicy: 'all',
        },
    };

    let dataExtractor = (data) => {
        if (data && data.posts) return data.posts;
        else return [];
    };

    if (category) {
        queryConfig.query = POSTS_BY_TAG;
        queryConfig.options.variables = {
            name: category,
        };
        dataExtractor = (data) => {
            if (data && data.tagByName) return data.tagByName.posts;
            else return [];
        };
    }

    const { loading, error, data, fetchMore, networkStatus } = useQuery(queryConfig.query, queryConfig.options);

    let isLoading = loading || networkStatus === NetworkStatus.refetch;

    let posts = dataExtractor(data);
    let noPosts = Boolean(isLoading || error || posts.length === 0);
    let renderMore = !noPosts && posts.length % 10 === 0;

    const showPosts = (posts) => (
        <div
            className={'posts-container'}
            style={{
                flex: 1,
                display: 'flex',
            }}
        >
            <style jsx>{`
                h3,
                p {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
            {posts.map((post) => (
                <PostItem
                    key={post.slug}
                    post={post}
                />
            ))}
        </div>
    );

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
                        <h3 style={{ color: 'rgb(129,129,129)' }}>
                            No posts yet, check back soon.
                        </h3>
                    )}
                </div>
            ) : (
                showPosts(posts)
            )}
            {renderMore && (
                <p style={{ alignSelf: 'center', color: 'rgb(237,56,57)' }}>
                    more
                </p>
            )}
        </div>
    );

};
