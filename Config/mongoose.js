//Require the mongoose library
const mongoose = require('mongoose');

//connect to the databse
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

//acquire the connection(to check if it is successfull)
const db = mongoose.connection;

//Error
db.on('error',function(err){ console.log(err.message); });

//If db is up and running then print the message in console
db.once('open',function(){
    console.log('successfully connected to the database: MongoDB');
});
