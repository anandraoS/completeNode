const db = require('../util/db');

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO PRODUCTS (title,price,description,imageUrl) values(?,?,?,?)'
    , [this.title, this.price, this.description, this.imageUrl]);
  }

  static deleteById() {
  }

  static fetchAll(cb) {
    return db.execute('select * from products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM PRODUCTS WHERE products.id=?',[id]);
  }
};
