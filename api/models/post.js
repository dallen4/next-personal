// TODO Post model schema

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const _ = require('lodash');
const slugify = require('slugify');
const { slugifyOptions } = require('../config');

// declare schema
var PostSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categories: { type: Array },
    desc: { type: String, maxlength: 240 },
    body: { type: String, required: true }
});

// Post COLLECTION METHODS (statics)

// generates unique slug for Post
PostSchema.statics.generateSlug = async function(title) {

    var Posts = this;

    let slugRoot = slugify(title, slugifyOptions);

    let slug = slugRoot;
    let slugTaken = true;
    let i = 0;

    while (slugTaken) {
        let existingPost = await Posts.findOne({ slug });
        if (existingPost) {
            slug = slugRoot + `-${++i}`;
            slugTaken = true;
            continue;
        }
        slugTaken = false;
    }

    return slug;

};

// finds post by slug
PostSchema.statics.findBySlug = async function(slug) {

    var Posts = this;

    try {
        let post = await Posts.findOne({ slug });

        if (!post)
            throw new Error('Could not retrieve post');

        return post;
    } catch (err) {
        console.log(err);
    }
};

// Post INSTANCE METHODS

PostSchema.methods.toJSON = async function() {

    var postObject = this.toObject();

    var postData = _.pick(postObject, ['title', 'body']);

    var user = await User.findById(postObject.author);
    // TODO

    return postData;

}

module.exports = mongoose.model('Post', PostSchema);
