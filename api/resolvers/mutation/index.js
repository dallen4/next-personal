const userMutations = require('./user');
const inviteMutations = require('./invite');
const postMutations = require('./post');

module.exports = {
    ...userMutations,
    ...inviteMutations,
    ...postMutations,
};
