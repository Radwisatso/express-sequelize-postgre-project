const ProductController = require('../controllers/productController');

const router = require('express').Router()

router.get('/', ProductController.getData)
router.get('/add', ProductController.readCreateData)
router.get('/:id', ProductController.getOneData)
router.post('/add', ProductController.createData)

module.exports = router;