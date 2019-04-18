const Sequerlize = require('sequelize');

const sequelize = require('../util/db');

const Cart  = sequelize.define('cart',{
id: {
  type: Sequerlize.INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey : true
}
});
module.exports = Cart;