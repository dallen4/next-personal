// utility functions (middleware)

const jwt = require('jsonwebtoken');

function getUserId(context) {

    const authToken = context.request.get('x-auth');
    authToken.replace('Bearer ', '');

    if (authToken) {
        const { _id } = jwt.verify(authToken, process.env.APP_SECRET);
        return _id;
    }

    throw new Error('Not authenticated');
    
}

module.exports = {
    getUserId
};
