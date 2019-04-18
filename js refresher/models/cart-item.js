const Sequerlize = require('sequelize');

const sequelize = require('../util/db');

const CartItem  = sequelize.define('cartItem',{
id: {
  type: Sequerlize.INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey : true
},
quantity: Sequerlize.INTEGER
});
module.exports = CartItem;