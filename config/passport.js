const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done) {
        db.Users.findOne({
            email: email
        }).then(function(user, userEmail, nameOfUser) {
        if (!user) {
            return done(null, false, {
            message: "No users match that email. Try a new email or press Sign-Up"
            });
        }
        else if (!user.validPassword(password)) {
            return done(null, false, {
            message: "Your login details did not match our records. Try again"
            });
        }
        
        userEmail = user.email;
        nameOfUser = user.nameOfUser
        return done(null, user, userEmail, nameOfUser);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
    if (user) {
        console.log("USER IS NOW LOGGED IN");
    };
    console.log("User data", user)
});

passport.deserializeUser(function(email, done) {
    db.User.findOne({
        email: email
    }).then(function(user) {
        done(null, user);
        if (!user) {
        console.log("NO USER");
        }
    })

});

// Exporting our configured passport
module.exports = passport;