const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.BlogPost
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByGenre: function (req,res) {
        db.BlogPost    
            .findOne({
                genre: req.params.topic
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findWhereGenre: function (req,res) {
        db.BlogPost    
            .find({
                genre: req.params.topic
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findGenres: function (req,res) {
        db.BlogPost
            .find({},
            'genre')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findDataExcept: function (req, res) {
        db.BlogPost
            .find( { _id: { $ne: req.params.id } }, 
            ["genre", "title", "dateWritten"])
            .then(dbModel => res.json(dbModel) )
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
            .sort({ created_at: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //findByTopic
    //
    remove: function (req, res) {
        db.BlogPost
            .findByIdAndDelete(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
