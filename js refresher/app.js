const http = require('http');

const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('in the middle ware');
    next();
});

app.use((req, res, next) => {
    console.log('in Another middle ware');
    res.send({"name":"anand","number":123});
});

const requestHandler = require('./routes');

app.listen(3000);