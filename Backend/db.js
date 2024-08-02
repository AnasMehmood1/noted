const mongoose = require("mongoose");
require('dotenv').config();

const mongourl = process.env.mongourl; // Ensure this matches the name in .env

const connectToMongo = () => {
    mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err);
        } else {
            console.log("Connected to mongo successfully");
        }
    });
};

module.exports = connectToMongo;
