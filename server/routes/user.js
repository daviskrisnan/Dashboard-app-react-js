const userRoute = require('express').Router();
const { UserController } = require('../controllers')

userRoute.get('/', UserController.list);

userRoute.get('/add', UserController.add);
userRoute.post('/add', UserController.addPost);

userRoute.get('/edit/:id', UserController.edit);
userRoute.put('/edit/:id', UserController.editPost);

userRoute.delete('/delete/:id', UserController.delete);

userRoute.get('/info/:id', UserController.getInfo);


module.exports = userRoute;