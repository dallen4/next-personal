const User = require('../api/models/user');

async function checkForUpdates() {
    try {
        let existingUsers = await User.find();
        if (existingUsers.length > 0)
            return;

        console.log('No users found, creating root user...');

        var rootUser = new User({
            username: 'Nieky',
            email: 'nieky.allen@gmail.com',
            password: process.env.TEST_PWD,
        });

        await rootUser.save();
        console.log('Created root user...');
        return;

    } catch (err) {
        console.error('Error checking existing users: ', err);
    }
}

module.exports = {
    checkForUpdates
};
