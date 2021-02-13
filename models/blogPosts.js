const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogPostSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: true
    },
    blurb: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        trim: true,
        maxlength: 200
    }
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

module.exports = blogPost;
