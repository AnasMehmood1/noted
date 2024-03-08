const mongoose = require("mongoose")
const mongourl = "mongodb://localhost:27017/Practice"

const connectToMongo = ()=>{
    mongoose.connect(mongourl,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo

