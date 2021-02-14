const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.BlogPost
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.BlogPost
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.BlogPost
            .findById(req.params.id)
            .sort({ date: -1 })
            .then(dbModel => {
                console.log(req.params.id);
                res.json(dbModel)
                }    )
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.BlogPost
            .findByIdAndDelete(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
