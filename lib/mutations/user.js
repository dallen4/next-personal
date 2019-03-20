import gql from 'graphql-tag';

// creates (signs up) a new user
const SIGNUP = gql`
mutation signup($username: String!, $email: String!, $password: String!, $inviteToken: String!) {
	signup(username: $username, email: $email, password: $password, inviteToken: $inviteToken) {
		user {
			email
			id
		}
		token
	}
}
`;

// logs in an existing user
const LOGIN = gql`
mutation login($username: String, $email: String, $password: String!) {
	login(username: $username, email: $email, password: $password) {
		user {
			email
			username
		}
		token
	}
}
`;

export {
    SIGNUP,
    LOGIN,
};
