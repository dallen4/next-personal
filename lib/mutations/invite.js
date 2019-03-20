// invite mutations
import gql from 'graphql-tag';

// sends and creates a new user invite
const SEND_INVITE = gql`
mutation sendInvite($email:String!) {
    sendInvite(email: $email) {
        id
        email
        token
    }
}
`;

export {
    SEND_INVITE,
};
