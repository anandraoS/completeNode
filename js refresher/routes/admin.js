const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button>addTitle</button></form>');
    //res.send({ "name": "anand", "number": 123 });
    // next();
});
router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});
module.exports = router;