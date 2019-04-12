const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');

const app = express();

// declaring engine with handlebars it can be anything
app.engine('handlebars', expressHbs({layoutsDir:'views/layouts', defaultLayout: 'main-layout'}));

 app.set('view engine','handlebars');
//app.set('view engine','pug');
app.set('views','views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'file not found'});
});

app.listen(3000);
