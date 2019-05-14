const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('admin');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //rootDir is a helper with the absolute path on OS to the project folder it's used in(routes in this case)
    //The next attribute will be in this case .. to go up one level
    //The next attribute is the folder, then the file.
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;