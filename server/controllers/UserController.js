const { user } = require('../models');

class UserController {
    static list(req, res) {
        user.findAll()
            .then(users => res.json(users))
            .catch(err => res.json(err))
    }

    static add(req, res) {

    }

    static addPost(req, res) {
        const { name } = req.body;
        user.create({
            name
        })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

    static edit(req, res) {

    }

    static editPost(req, res) {
        const id = +req.params.id;
        const { name } = req.body;

        user.update({
            name
        }, {
            where: { id }
        })
            .then(result => [
                result[0] === 1 ?
                    res.json({
                        message: `id ${id} has been updated..`
                    }) : 
                    res.json({
                        message: `id ${id} has not been updated..!`
                    })
            ])
            .catch(err => res.json(err))
    }

    static delete(req, res) {
        const id = +req.params.id;

        user.destroy({
            where: { id }
        })
            .then(result => {
                result === 1 ?
                    res.json({
                        message: `id ${id} has been deleted..`
                    }) : 
                    res.json({
                        message: `id ${id} has not been deleted..!`
                    })
            })
            .catch(err => res.json(err))
    }

    static getInfo(req, res) {
        const id = +req.params.id;

        user.findByPk(id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}

module.exports = UserController;