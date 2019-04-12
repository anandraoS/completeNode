const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('in the middle ware');
    res.sendFile(path.join(rootDir,'views','shop.html'));
   // res.send('<h1>Welcome to world</h1>');
    // res.send({"name":"anand","number":123});
    // next();
});

module.exports = router;
