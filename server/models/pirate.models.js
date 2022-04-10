const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        minlength: [3, "Please insert at least 3 characters for your pirates name!"],
        required: [true, "Please enter the name of your pirate!"]
    },
    piratePhoto: {
        type: String,
        required: [true, "Please insert a photo for your pirate"],
    },
    trasureChests: {
        type: Number,
        required: [true, "please provide a number of chests your pirate has, else he's a bitch"],
    },
    catchPhrase: {
        type: String,
        required: [true, "A pirate always as a catch phrase"],
    },
    crewPosition: {
        type: String,
        enum:[ 
            "Select a Position",
            "Captain",
            "First Mate",
            "Quarter Master",
            "Boatswain",
            "Powder Monkey"
            ],
        required: [true, "please select a posiition for your pirate"]
    },
    pepLeg: {
        type: Boolean,

    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },


}, {timestamps:true})

const Pirates = mongoose.model("Pirates", PirateSchema)

module.exports = Pirates;