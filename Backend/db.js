const mongoose = require("mongoose")
const mongourl = "mongodb://localhost:27017/noted"

const connectToMongo = ()=>{
    mongoose.connect(mongourl,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo

