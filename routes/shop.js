const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //__dirname is absolute path on OS to the project folder it's used in(routes in this case)
    //The next attribute will be in this case ../ to go up one level
    //The next attribute is the folder, then the file.
});

module.exports = router;