// mongoose connection

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// was throwing error, implemented to fix
// ref: https://github.com/Automattic/mongoose/issues/6890
mongoose.set('useCreateIndex', true);

// useNewUrlParser resolves depracation warning
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
}).catch(error => console.log('failed to connect to MongoDB...'));

module.exports = mongoose;
