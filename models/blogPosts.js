const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    blurb: {
        type: String,
        required: true
    },
    paragraphs: [
        {
            type: String,
        }
    ],
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    date: { type: Date, default: Date.now }
}, { collection: 'blogDB' });

const BlogPost = mongoose.model("BlogDB", blogPostSchema);


module.exports = BlogPost;
