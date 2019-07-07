import gql from 'graphql-tag';

const LIST_POSTS = gql`
{
    posts {
        _id
        title
        slug
        category {
            title
        }
        description
        body
        views
        likes
        publishedAt
        updatedAt
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
        category {
            title
        }
        description
        body
        views
        likes
        publishedAt
        updatedAt
    }
}
`;

export {
    LIST_POSTS,
    POST,
};
