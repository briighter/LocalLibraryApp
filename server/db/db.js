//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var uri = 'mongodb://admin:RAzIXIrKaJsGmkCA@cluster0-shard-00-00.ucpvo.mongodb.net:27017,cluster0-shard-00-01.ucpvo.mongodb.net:27017,cluster0-shard-00-02.ucpvo.mongodb.net:27017/localLibrary?ssl=true&replicaSet=atlas-10ep4u-shard-0&authSource=admin&retryWrites=true&w=majority';

if (process.env.NODE_ENV === "production") {
    uri = process.env.MONGODB_URI;
}

async function run() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        debug("Connected to server...")
        //Get the default connection
        var db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    } finally {
        module.exports = db;
    }
}

run().catch(console.dir)