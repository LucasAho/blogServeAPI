const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    conlang: {
        type: String,
        trim: true,
        required: true
    },
    english: {
        type: String,
        trim: true,
        required: true
    },
    pos: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true
    },
    sentence: {
        type: String,
    },
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    etymology: {
        type: String
    },
    created_at: { type: Date, default: Date.now }
}, { collection: 'wordDB' });

const WordModel = mongoose.model("WordDB", wordSchema);


module.exports = WordModel;
