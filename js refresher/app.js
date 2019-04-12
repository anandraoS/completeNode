const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>addTitle</button></form>');
    //res.send({ "name": "anand", "number": 123 });
    // next();
});
app.use('/product', (req, res, next) => {
    console.log(req.body.title);
res.redirect('/');
})
app.use('/', (req, res, next) => {
    console.log('in the middle ware');
    res.send('<h1>Welcome to world</h1>');
    // res.send({"name":"anand","number":123});
    // next();
});

app.use((req, res, next) => {
    console.log('in Another middle ware');
    res.send({ "name": "anand", "number": 123 });
});

const requestHandler = require('./routes');

app.listen(3000);