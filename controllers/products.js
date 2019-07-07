const Product = require('../models/product');

//Admin........
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postEditProduct = (req, res, next) => {
    res.redirect('/');
}

exports.getAdminProducts = (req, res, next) => {
    res.render('admin/products', {
        pageTitle: 'Admin Product',
        path: '/admin/produts',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}
//------------------------------------------------

//Shop.......
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    }); 
}

exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', {
            prods: products, 
            pageTitle: 'Cart',
            path: '/cart',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    }); 
}

exports.getCheckout = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/checkout', {
            prods: products, 
            pageTitle: 'Checkout',
            path: '/checkout',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    }); 
}

exports.getProductDetail = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-detail', {
            prods: products, 
            pageTitle: 'Product Detail',
            path: '/product-detail',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    }); 
}


