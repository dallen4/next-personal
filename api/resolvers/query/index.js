const postQueries = require('./post');
const info = () => ['hello', 'goodbye'];

module.exports = {
    ...postQueries,
    info,
};
