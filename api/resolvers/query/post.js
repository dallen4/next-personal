// post queries
const _ = require('lodash');
const Post = require('../../models/post');
const User = require('../../models/user');

async function listPosts(parent, args, context, info) {

    try {

        var postsFound = await Post.find();
        var posts = [];

        for (let i = 0; i < postsFound.length; i++) {

            let user = await User.findById(postsFound[i].author);

            let postInfo = _.pick(postsFound[i], ['title', 'body']);
            postInfo.author = {
                id: user._id,
                email: user.email,
                username: user.username,
            };

            posts.push(postInfo);

        }

        return posts;

    } catch (error) {

        console.log(error)
        throw new Error('An error occured retrieving posts');

    }

}

async function post(parent, args, context, info) {

    if (!Object.keys(args).length)
        throw new Error('No post was specificied');

    try {

        if (args.id) {
            args._id = args.id;
            delete args.id;
        }

        let postDoc = await Post.findOne(args);
        let post = postDoc.toJSON();

        return post;

    } catch (error) {

        console.log(error);
        throw new Error('An error occured retrieving this post');

    }

}

module.exports = {
    listPosts,
    post,
};
