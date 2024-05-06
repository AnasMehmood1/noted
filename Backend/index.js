const connectToMongo = require("./db")
var cors = require('cors')
connectToMongo()
const express = require("express")
const app = express()
const port = 5000



app.use(cors(
  {
    origin:["https://notedd-app.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
))
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use("/api/notes",require("./routes/notes"))
app.listen(port,()=>{
  console.log(`app is listening on port http://localhost:${port}`)

})
