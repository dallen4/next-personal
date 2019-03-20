import gql from 'graphql-tag';

const LIST_POSTS = gql`
{
    listPosts {
        id
    }
}
`;

export {
    LIST_POSTS,
};
