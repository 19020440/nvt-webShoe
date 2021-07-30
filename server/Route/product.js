const express = require('express');
const router = express.Router();
const productController = require('../Controller/ProductController');


router.get('/:id', productController.shoe)

module.exports = router;