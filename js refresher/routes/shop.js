const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const admindata = require('./admin').data;
router.get('/', (req, res, next) => {
  console.log(admindata); res.render('shop',{path:'/', prods:admindata, pageTitle:'Shop'});
  // res.render(path.join(rootDir,'views','shop'))
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
