const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/product-list', productsController.getProducts);
router.get('/cart', productsController.getCart);
router.get('/product-detail', productsController.getProductDetail);
router.get('/checkout', productsController.getCheckout);

module.exports = router;