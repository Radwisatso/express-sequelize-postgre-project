const router = require('express').Router()
const dealerRoute = require('./dealerRoute')
const productRoute = require('./productRoute')

router.get('/', (req, res) => {
    res.render('home')
})
router.use('/dealers', dealerRoute)
router.use('/products', productRoute)

module.exports = router;