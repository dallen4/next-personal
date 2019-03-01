const _ = require('lodash');
const { getUserId } = require('../../utils');
const Post = require('../../models/post');
const User = require('../../models/user');

// creates new Post in posts collection
async function newPost(parent, args, context, info) {

    const userId = getUserId(context);

    const postData = _.pick(args, 
        'title',
        'author',
        'categories',
        'description',
        'body'
    );

    if (userId !== postData.author) {
        throw new Error('Posts must be created by the author');
    }

    try {

        postData.slug = await Post.generateSlug(postData.title);
        var post = new Post(postData);

        await post.save();

        var user = await User.findById(post.author);

    } catch(error) {
        
        throw new Error('An error occured creating your post');

    }

    return {
        id: post._id,
        title: post.title,
    	author: {
            id: user._id
        },
        body: post.body,
        slug: post.slug,
    };

}

// updates existing Post in posts collection
async function updatePost(parent, args, context, info) {

    const userId = getUserId(context);

    let { id } = args;

    try {

        const post = await Post.findById(id);

        if (userId !== post.author) {
            throw new Error('Private posts can only be edited by their author');
        }

        let updates = { ...args };
        delete updates.id;

        if (updates.title && updates.title !== post.title)
            updates.slug = await Post.generateSlug(updates.title);

        post.set(updates);
        await post.save();

        return {
            id,
            title: post.title,
        };

    } catch (error) {

        throw new Error('An error occured updating your post');

    }

}

// TODO deletes existing Post in posts collection
async function deletePost(parent, args, context, info) {
    return;
}

module.exports = {
    newPost,
    updatePost,
};
