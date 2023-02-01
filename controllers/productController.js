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

}

module.exports = ProductController;