const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoClient= callback=>{
    MongoClient.connect('mongodb+srv://anand:JwLCKyVrJVsmW0cX@anand-y69lt.mongodb.net/test?retryWrites=true')
    .then(client=>{
        console.log('Connected');
        callback(client);
    }).catch(err=>{
        console.log(err);
    })
};
module.exports = mongoClient;