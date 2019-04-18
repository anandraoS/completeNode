const Sequerlize = require('sequelize');

const sequelize = require('../util/db');

const Order  = sequelize.define('order',{
id: {
  type: Sequerlize.INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey : true
}
});
module.exports = Order;