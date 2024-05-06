const mongoose = require("mongoose")
const mongourl = `mongodb+srv://anasmehmoodvip:LHUDAm65fTlS6Iss@cluster0.khl6p8j.mongodb.net/noted?retryWrites=true&w=majority&appName=Cluster0`

const connectToMongo = ()=>{
    mongoose.connect(mongourl,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo

