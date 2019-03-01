// mongoose connection

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI).catch(error => console.log(error));

module.exports = mongoose;
