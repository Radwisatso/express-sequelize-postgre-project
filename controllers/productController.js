const { Dealer, Product } = require('../models')

class ProductController {

    static getData(req, res) {
        Product.findAll({
            include: [Dealer]
        })
            .then(result => {
                res.render('product', { products: result })
            })
            .catch(err => {
                console.log(err)
            })
    }

    static getOneData(req, res) {
        Product.findOne({
            where: {
                id: +req.params.id
            },
            include: [Dealer]
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static readCreateData(req, res) {
        Dealer.findAll()
            .then(result => {
                res.render('addProduct', { dealers: result })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static createData(req, res) {
        const { name, stock, DealerId } = req.body
        Product.create({
            name,
            stock,
            DealerId
        })
            .then(result => {
                res.redirect('/products')
            })
            .catch(err => {
                console.log(err)
            })
    }

    static readUpdateData(req, res) {
        const { id } = req.params
        Promise.all([
            Product.findOne({
                where: {
                    id: +id
                },
                include: [Dealer]
            }),
            Dealer.findAll()
        ])
            .then(result => {
                res.render('updateProduct', { product: result[0], dealers: result[1] })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateData(req, res) {
        const { name, stock, DealerId } = req.body
        const { id } = req.params
        Product.update({
            name,
            stock,
            DealerId
        }, {
            where: { id: id },
            returning: true
        })
            .then(result => {
                res.redirect('/products')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })

    }

    static deleteData(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.redirect('/products')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ProductController;