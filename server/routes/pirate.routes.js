const PirateController = require('../controller/pirate.controller');

module.exports = (app) => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.post('/api/pirates', PirateController.addPirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    app.put('/api/pirates/:id', PirateController.updateOnePirate);
    app.patch('/api/pirates/:id', PirateController.updateOnePirate);
}

