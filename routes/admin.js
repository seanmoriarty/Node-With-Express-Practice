const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('admin');
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    //__dirname is absolute path on OS to the project folder it's used in(routes in this case)
    //The next attribute will be in this case ../ to go up one level
    //The next attribute is the folder, then the file.
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;