import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import CategoryLink from './CategoryLink';
import { formatDate } from '../../lib/util';

const PostItem = ({ post }) => {
    return (
        <div
            key={post.slug}
            className={'post-item'}
            style={{
                minHeight: '120px',
                maxHeight: 'auto',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}
            onClick={() => Router.push(`/post/${post.slug}`)}
        >
            <style jsx>{`
                h3,
                p {
                    margin: 0;
                    padding: 0;
                }

                h3 {
                    padding-bottom: 7px;
                }
            `}</style>
            {post.imageUrl && (
                <div
                    className={'post-thumbnail'}
                    style={{
                        minHeight: '120px',
                        flex: 1,
                        height: '120px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={post.imageUrl}
                        style={{
                            maxHeight: '100%',
                            width: '100%',
                            objectFit: 'contain',
                            borderRadius: '4px',
                        }}
                    />
                </div>
            )}
            <div
                style={{
                    flex: 2,
                    height: 'calc(100% - 20px)',
                    paddingLeft: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <h3>{post.title}</h3>
                <p style={{ flex: 1, color: 'rgb(129,129,129)' }}>
                    {post.description}
                </p>
                <div>
                    <p
                        style={{
                            display: 'inline',
                        }}
                    >
                        {formatDate(post.publishedAt)}{' '}
                        &bull; In{' '}
                    </p>
                    <CategoryLink category={post.tag.name} />
                </div>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        author: PropTypes.shape({
            username: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        tag: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        publishedAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }),
};

export default PostItem;
