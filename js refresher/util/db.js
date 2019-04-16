const Sequelize = require('sequelize');
const sequelize = new Sequelize('anand', 'root', 'anand', 
{ dialect: 'mysql',
 host: 'localhost' 
});
module.exports = sequelize;
