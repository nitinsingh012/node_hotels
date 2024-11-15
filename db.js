const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/nitin';

mongoose.connect(url) // No options needed for new versions

const db = mongoose.connection;

// Correcting the event names for connecting and errors
db.on('connected', () => { // Changed 'connection' to 'connected'
    console.log("Connected to MongoDB");
});
db.on('error', (err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = db;
