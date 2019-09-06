const Product = require('../models/product');

//Shop.......
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop',
            path: '/products',
            hasProducts: products.length > 0
        });
    }); 
}

exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', {
            prods: products, 
            pageTitle: 'Cart',
            path: '/cart',
        });
    }); 
}

exports.getOrders = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/orders', {
            prods: products, 
            pageTitle: 'Orders',
            path: '/orders',
        });
    }); 
}

exports.getCheckout = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/checkout', {
            prods: products, 
            pageTitle: 'Checkout',
            path: '/checkout',
        });
    }); 
}

exports.getProductDetail = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-detail', {
            prods: products, 
            pageTitle: 'Product Detail',
            path: '/product-detail',
        });
    }); 
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Indec',
            path: '/',
            hasProducts: products.length > 0
        });
    }); 
}


