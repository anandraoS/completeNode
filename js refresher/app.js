const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const Sequelize = require('sequelize');
// const db= require('./util/db');

const sequelize = require('./util/db');

const Product = require('./models/product');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    console.log('I don\'t know coming or not');
    User.findByPk(1).then(user=>{
        console.log('coming');
        console.log(user);
        req.user = user;
        next();
    }).catch(err=>console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);





Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

User.hasMany(Product);


sequelize
    // .sync({force:true})
    .sync()
    .then(result => {
        //console.log(result);
        return User.findByPk(1);
        //app.listen(3000);
    }).then(user => {
        if (!user) {
            return User.create({ name: 'anand', email: 'happy@gmail.com' });
        }
        return user;
    }).then(user => {
        //console.log(user);
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });

