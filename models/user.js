const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minLength: 2,
        maxLength: 26
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        minLength: 2,
        maxLength: 26
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    accountType: {

    },
    date: { 
        type: Date, 
        default: Date.now 
    }
}, { collection: 'userDB' });

const User = mongoose.model("User", userSchema);

User.prototype.validPassword = function(pass) {
    return bcrypt.compareSync(pass, this.pass);
}

module.exports = User;