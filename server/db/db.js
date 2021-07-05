//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var uri = 'mongodb+srv://admin:@cluster0.ucpvo.mongodb.net/localLibrary?retryWrites=true&w=majority';
if (process.env.NODE_ENV === "production") {
    uri = process.env.MONGODB_URI;
}

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