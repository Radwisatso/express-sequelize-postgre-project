const ProductController = require('../controllers/productController');

const router = require('express').Router()

router.get('/', ProductController.getData)
router.get('/add', ProductController.readCreateData)
router.get('/update/:id', ProductController.readUpdateData)
router.get('/delete/:id', ProductController.deleteData)
router.get('/:id', ProductController.getOneData)
router.post('/add', ProductController.createData)
router.post('/update/:id', ProductController.updateData)

module.exports = router;