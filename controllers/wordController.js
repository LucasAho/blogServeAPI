const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.WordModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.WordModel
            .find(
                {},
                ["conlang", "english", "pos"]
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.WordModel
            .findOne({
                conlang: req.params.word
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
