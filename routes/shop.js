const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //__dirname is absolute path on OS to the project folder it's used in(routes in this case)
    //The next attribute will be in this case ../ to go up one level
    //The next attribute is the folder, then the file.
});

module.exports = router;