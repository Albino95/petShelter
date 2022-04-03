const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        minlength: [3, "Please insert at least 3 characters for your pets name!"],
        required: [true, "Please enter a name for your pet!"]
    },
    petType: {
        type: String,
        minlength: [3,"There is no type of animal discovered with less than 3 characters, please insert a valid type!" ],
        required: [true, "Please insert the type of your animal, if you are not sure conult a veterinerian!"],
    },
    petDescription: {
        type: String,
        minlength: [3,"Please decribe in more words !" ],
        required: [true, "You must give a little description for your pet"],
    },
    petSkills: {
        type: Array,
        maxlength: [3, "It's an animal, not Batman, three is enough"]
    },
}, {timestamps:true})

const Pets = mongoose.model("Pets", PetSchema)

module.exports = Pets;