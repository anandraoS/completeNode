const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const data = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle:'addintItem',path:'/admin/add-product',formCSS:true,productCSS:true, activeAddProduct:true});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  data.push({title:req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.data = data;