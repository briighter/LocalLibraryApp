//Import the mongoose module
var mongoose = require('mongoose');
mongoose.set('bufferCommands', false);
mongoose.set('autoCreate', true);

//Set up default mongoose connection
var uri = 'mongodb+srv://admin:RAzIXIrKaJsGmkCA@cluster0.ucpvo.mongodb.net/localLibrary?retryWrites=true&w=majority';
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