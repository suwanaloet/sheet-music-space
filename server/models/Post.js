const mongoose = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormatter');

const { Schema } = mongoose;


const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: "Post content cannot be blank!",
            minlength: 5,
            maxlength: 500
        },
        postSheetUrl: {
            type: String,
            required: "Can't share without link! If stored locally, consider exporting to google drive and obtaining a link!",
            minlength: 15,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;