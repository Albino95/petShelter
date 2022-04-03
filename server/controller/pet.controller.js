const { request } = require('http');
const Pet = require('../models/pet.models');

module.exports = {
    getAllPets: ((req, res) => {
        Pet.find().sort({petType: 1}).collation({locale: "en", caseLevel:true})
            .then((allPets) => {
                console.log(allPets)
                res.json(allPets)
            })
            .catch((err) => {
                console.log(err);
                res.json(`error for getting all Pets is : ${err}`)
            })
    }),
    addPet: ((req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log(err);
                res.json(`There was this error with creating a new Pet : ${err}`)
            })
    }),

    deletePet: ((req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then((deletedPet) => {
                console.log(`you have succesfully deleted ${deletedPet}`)
                res.json(deletedPet)
            })
            .catch((err) => {
                console.log(`there was this probelem with deleting ${deletedPet}: ${err}`)
            })
    }),

    getOnePet: ((req, res) => {
        Pet.findOne({_id: req.params.id})
            .then((onePet) => {
                console.log(`you have succesfully found pet`)
                res.json(onePet)
            })
            .catch((err) => {
                console.log(`there was this probelem with deleting pet:` + err)
            })
    }),

    updateOnePet: ((request, response) => {
        Pet.findOneAndUpdate({_id: request.params.id},
            request.body,
            {new: true, runValidators: true}

            )
            .then((updatedPet) => {
                console.log(updatedPet);
                response.json(updatedPet)
            })
            .catch((err) => {
                console.log("There was this error with updating your Pet: " + err)
                response.json({message: "Error with updating the pet", err})
            })
    })
}