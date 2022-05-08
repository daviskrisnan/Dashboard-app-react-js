const itemRoute = require('express').Router();
const { ItemController } = require('../controllers')

itemRoute.get('/', ItemController.list);

// itemRoute.get('/add', ItemController.add);
itemRoute.post('/add', ItemController.addPost);

itemRoute.get('/edit/:id', ItemController.edit);
itemRoute.put('/edit/:id', ItemController.editPost);

itemRoute.delete('/delete/:id', ItemController.delete);

itemRoute.get('/info/:id', ItemController.getInfo);

module.exports = itemRoute;