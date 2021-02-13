const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.blogPost
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        db.blogPost(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    }
}
