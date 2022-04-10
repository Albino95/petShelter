const { request } = require('http');
const Pirate = require('../models/pirate.models');

module.exports = {
    getAllPirates: ((req, res) => {
        Pirate.find().sort({pirateName: 1}).collation({locale: "en", caseLevel:true})
            .then((allPirates) => {
                console.log(allPirates)
                res.json(allPirates)
            })
            .catch((err) => {
                console.log(err);
                res.json(`error for getting all Pirates is : ${err}`)
            })
    }),
    addPirate: ((req, res) => {
        Pirate.create(req.body)
            .then((newPirate) => {
                console.log(newPirate);
                res.json(newPirate);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }),

    deletePirate: ((req, res) => {
        Pirate.deleteOne({_id: req.params.id})
            .then((deletedPirate) => {
                console.log(`you have succesfully deleted ${deletedPirate}`)
                res.json(deletedPirate)
            })
            .catch((err) => {
                console.log(`there was this probelem with deleting ${deletedPirate}: ${err}`)
                res.status(400).json(err)
            })
    }),

    getOnePirate: ((req, res) => {
        Pirate.findOne({_id: req.params.id})
            .then((onePirate) => {
                console.log(`you have succesfully found pirate`)
                res.json(onePirate)
            })
            .catch((err) => {
                console.log(`there was this probelem with deleting pirate:` + err)
                res.log(err)
            })
    }),

    updateOnePirate: ((request, response) => {
        Pirate.findOneAndUpdate({_id: request.params.id},
            request.body,
            {new: true, runValidators: true}

            )
            .then((updatedPirate) => {
                console.log(updatedPirate);
                response.json(updatedPirate)
            })
            .catch((err) => {
                console.log("There was this error with updating your Pirate: " + err);
                response.status(400).json(err);
            })
    })
}