
const { Dealer } = require('../models')

class DealerController {

    static getData(req, res) {
        Dealer.findAll()
            .then(result => {
                console.log(result)
                res.render('dealer', { dealers: result })
            })
            .catch(err => {
                console.log(err)
            })
    }


}

module.exports = DealerController;