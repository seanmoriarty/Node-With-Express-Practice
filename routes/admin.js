const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

router.get('/products', adminController.getAdminProducts);

module.exports = router;