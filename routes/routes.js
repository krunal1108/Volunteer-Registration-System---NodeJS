const express = require('express');
const controlToRoute = require('../controllers/controller');
const routes = express.Router();


routes.get('/',controlToRoute.defaultController);
routes.post('/addVol', controlToRoute.VolRun);
routes.get('/editvol/:id', controlToRoute.editVolController);
routes.post('/updatevol/:id', controlToRoute.updateVolController);
routes.get('/deletevol/:id', controlToRoute.deleteVolController);



module.exports = routes;