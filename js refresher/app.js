const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.sendfile(path.join(__dirname,'../','views','404.html'));
});

app.listen(3000);