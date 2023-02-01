const DealerController = require('../controllers/dealerController');

const router = require('express').Router()

router.get('/', DealerController.getData)

module.exports = router;