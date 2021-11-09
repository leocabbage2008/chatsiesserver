var mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.DB_CONNECTION_STRING;

console.log('MONGODB Connection String: ----------------->');
console.log(connectionString);
console.log('MONGODB Connection String: ----------------->');

let isConnected;

const connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }
  console.log('=> using new database connection');
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      isConnected = db.connections[0].readyState;
      console.log('Connection Success!');
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectToDatabase;
