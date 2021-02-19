
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const conLetterSchema = new Schema({
    ipa: {
        type: String,
        trim: true,
        required: true
    },
    latin: {
        type: String,
        required: true
    },
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    date: { type: Date, default: Date.now }
}, { collection: 'tukrenLetterDB' });

const ConLetter = mongoose.model("ConLangDB", conLetterSchema);

module.exports = ConLetter;