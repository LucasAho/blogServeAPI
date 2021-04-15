const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionsSchema = new Schema({
    session: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Sessions = mongoose.model("Sessions", sessionsSchema);

module.exports = Sessions;