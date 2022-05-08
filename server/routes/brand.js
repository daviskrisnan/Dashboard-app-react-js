const brandRoute = require('express').Router();
const { BrandController } = require('../controllers')

brandRoute.get('/', BrandController.list);

brandRoute.get('/add', BrandController.add);
brandRoute.post('/add', BrandController.addPost);

brandRoute.get('/edit/:id', BrandController.edit);
brandRoute.put('/edit/:id', BrandController.editPost);

brandRoute.delete('/delete/:id', BrandController.delete);

brandRoute.get('/info/:id', BrandController.getInfo);


module.exports = brandRoute;