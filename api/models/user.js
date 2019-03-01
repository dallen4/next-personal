// User model schema

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('validator');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// declare schema
var UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { 
        type: String, 
        required: [ true, 'email is required for user account creation' ],
        unique: true, 
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email...'
        }
    },
    password: { type: String, required: true, minlength: 6 },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// User SCHEMA METHODS

// add function method to UserSchema
UserSchema.methods.generateAuthToken = function() {

    // get document
    var user = this;

    var access = 'auth';

    // generate jsonwebtoken w/ salt value
    var token = jwt.sign({ 
        _id: user._id.toHexString(),
        access,
        username: user.username
    }, process.env.APP_SECRET).toString();

    // add token to tokens array in user doc
    user.tokens.push({ access, token });

    // return promise with token if token saved successfully
    return user.save().then(() => {
        return token;
    });

};

// overwrite toJSON method to only return _id and email
UserSchema.methods.toJSON = function() {

    var user = this;
    var userObj = user.toObject();

    return _.pick(userObj, [ '_id', 'email', 'username' ]);

}

// User COLLECTION METHODS (statics)

// model method for token auth
// -- statics makes function models method
UserSchema.statics.findByToken = function (token) {

    // init ref to collection
    var Users = this;

    // init var for decoded token
    var decoded;

    try {
        decoded = jwt.verify(token, 'salted');
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }

    return Users.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });

};

// find user document with email and password
// -- used for login
UserSchema.statics.findByCredentials = function (creds, password) {

    // init ref to collection
    var Users = this;

    // find user doc by email or username
    return Users.findOne(creds).then(user => {

        if (!user) return Promise.reject();

        return new Promise((resolve, reject) => {

            // check password
            bcrypt.compare(password, user.password, (error, res) => {

                if (res)
                    resolve(user);
                else
                    reject();
                
            });
        });
    });

};

// User MIDDLEWARE / LISTENERS

// if password has been modified, hash before saving
UserSchema.pre('save', function(next) {

    var user = this;

    if (user.isModified('password')) {

        bcrypt.genSalt(15, (error, salt) => {
            bcrypt.hash(user.password, salt, (error, hash) => {
                    user.password = hash;
                    next();
                });
        });
    } else {
        next();
    }

});

module.exports = mongoose.model('User', UserSchema);
