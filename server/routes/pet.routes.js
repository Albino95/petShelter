const petController = require('../controller/pet.controller');
const PetController = require('../controller/pet.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pets', PetController.addPet);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.get('/api/pets/:id', PetController.getOnePet);
    app.put('/api/pets/:id', petController.updateOnePet);
}

