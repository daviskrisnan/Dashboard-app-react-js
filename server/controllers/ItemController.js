const { item, brand, user } = require('../models');

class ItemController {
    static list(req, res) {
        item.findAll({
            include: [brand, user]
        })
            .then(items => res.json(items))
            .catch(err => res.json(err))
    }

    static add(req, res) {

    }

    static addPost(req, res) {
        const { name, price, category, image, brandId, userId } = req.body;

        if(name === null || price === null || category === null || brandId == 0 || userId == 0) {
            return res.status(400).send({
                message: `Data cannot be Null`
            })
        }
        item.create({
            name, price, category, image, brandId, userId
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
        const { name, price, category, image, brandId, userId } = req.body;

        item.update({
            name, price, category, image, brandId, userId
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

        item.destroy({
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

        item.findByPk(id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}

module.exports = ItemController;