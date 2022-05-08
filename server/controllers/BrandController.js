const { brand } = require('../models');

class BrandController {
    static list(req, res) {
        brand.findAll()
            .then(brands => res.json(brands))
            .catch(err => res.json(err))
    }

    static add(req, res) {

    }

    static addPost(req, res) {
        const { name, image } = req.body;
        brand.create({
            name, image
        })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }

    static edit(req, res) {

    }

    static editPost(req, res) {
        const id = +req.params.id;
        const { name, image } = req.body;

        brand.update({
            name, image
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

        brand.destroy({
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
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    }

    static getInfo(req, res) {
        const id = +req.params.id;

        brand.findByPk(id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}

module.exports = BrandController;