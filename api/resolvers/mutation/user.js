const _ = require('lodash');
const User = require('../../models/user');
const Invite = require('../../models/invite');

// creates (signs up) a new User in user collection
async function signup(parent, args, context, info) {

    const userData = _.pick(args, ['email', 'username', 'password']);
    const { inviteToken } = args;

    try {

        var invite = await Invite.findOne({
            email: userData.email,
            token: inviteToken
        });

        if (!invite || ['expired', 'used'].includes(invite.status))
            throw new Error(`An error occured creating your account,
                make sure your invite is valid...`);

        invite.status = 'used';
        await invite.save();

        var user = new User(userData);

        await user.save();
        var token = await user.generateAuthToken();

    } catch (error) {
        throw new Error('An error occured creating your account...');
    }

    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            username: user.username
        }
    };

}

// logs in an existing User in user collection
async function login(parent, args, context, info) {

    let { email, username, password } = _.pick(args, ['email', 'username', 'password']);

    var creds = {};

    username ? creds.username = username
    : email ? creds.email = email
    : () => { throw new Error('An email or username is required for account creation') };

    try {
        var user = await User.findByCredentials(creds, password);
        if (user)
            var token = await user.generateAuthToken();
        else
            throw new Error('User could not be found');
    } catch(error) {
        throw new Error('User could not be authenticated');
    }

    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            username: user.username
        }
    };

}

module.exports = {
    signup,
    login
};
