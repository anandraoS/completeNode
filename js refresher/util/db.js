const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://anand:JwLCKyVrJVsmW0cX@anand-y69lt.mongodb.net/test?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
      _db = client.db();
        
    })
    .catch(err => {
      console.log(err);
    });
};
getDb = ()=>{
    if(_db)
    return _db;
    else 
    throw 'No Database is found';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;