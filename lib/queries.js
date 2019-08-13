import gql from 'graphql-tag';

const LIST_POSTS = gql`
    {
        posts(where: { published: true }) {
            _id
            author {
                username
            }
            title
            slug
            tag {
                name
            }
            description
            body
            views
            likes
            publishedAt
            updatedAt
            imageUrl
            imageCaption
        }
    }
`;

const POSTS_BY_TAG = gql`
    query posts($name: String!) {
        tagByName(name: $name) {
            posts {
                _id
                author {
                    username
                }
                title
                slug
                tag {
                    name
                }
                description
                body
                views
                likes
                publishedAt
                updatedAt
                imageUrl
                imageCaption
            }
        }
    }
`;

const POST = gql`
    query post($slug: String!) {
        postBySlug(slug: $slug) {
            _id
            author {
                username
            }
            title
            slug
            tag {
                name
            }
            description
            body
            views
            likes
            publishedAt
            updatedAt
            imageUrl
            imageCaption
        }
    }
`;

const LIST_TAGS = gql`
    {
        tags {
            name
        }
    }
`;

export { LIST_POSTS, POSTS_BY_TAG, POST, LIST_TAGS };
