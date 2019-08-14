import gql from 'graphql-tag';

// creates a new post
const NEW_POST = gql`
mutation newPost($title: String!, $author: String!, $categories: [String]!, $description: String, $body: String!) {
    newPost(title: $title, author: $author, categories: $categories, description: $description, body: $body) {
        post {
            id
            author
            categories
            title
            slug
            description
            body
        }
    }
}
`;

// updates an existing post
const UPDATE_POST = gql`
mutation updatePost($id:ID!, $title: String, $author: String, $categories: [String], $description: String, $body: String) {
    updatePost(id:$id, title: $title, author: $author, categories: $categories, description: $description, body: $body) {
        title
        id
    }
}
`;

export {
    NEW_POST,
    UPDATE_POST,
};
