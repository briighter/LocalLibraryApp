//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var dev_uri = 'mongodb+srv://admin:dVbKLfv7nGQlVHh9@cluster0.ucpvo.mongodb.net/localLibrary?retryWrites=true&w=majority';
var uri = process.env.MONGODB_URI || dev_uri;

async function run() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to server...")
        //Get the default connection
        var db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    } finally {
        module.exports = db;
    }
}

run().catch(console.dir)