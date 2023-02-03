const { Dealer, Product } = require('../models')

class ProductController {

    static getData(req, res) {
        Product.findAll({
            include: [Dealer]
        })
            .then(result => {
                console.log(result)
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
                console.log(err)
            })
    }

    static createData(req, res) {
        const { name, stock, DealerId } = req.body
        console.log(name, stock, DealerId)
        Product.create({
            name,
            stock,
            DealerId
        })
        .then(result => {
            console.log(result, 'ini result ================')
            res.redirect('/products')
        })
        .catch(err => {
            console.log(err)
        })
    }

    static updateData(req, res) {

    }

    static deleteData(req, res) {
        
    }

}

module.exports = ProductController;