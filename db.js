const mongoose = require("mongoose");
require('dotenv').config()
// const url = "mongodb+srv://nitinsingh7323:FNjBvanRvPfbr2gT@nj.qfa6u.mongodb.net/myDatabase?retryWrites=true&w=majority";
// const url = 'mongodb+srv://nitinsingh7323:root@nj.qfa6u.mongodb.net/?retryWrites=true&w=majority&appName=nj';
const url = process.env.DB_NAME
// const url = process.env.LOCAL

mongoose.connect(url);

const db = mongoose.connection;

db.on('open', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

module.exports = db;
