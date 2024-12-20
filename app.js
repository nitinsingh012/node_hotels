const express = require("express")

const app = express()
const db = require("./db")
const person = require("./models/person")
require('dotenv').config()
const PORT = process.env.PORT || 3000
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.get("/", function(req,res){
    res.send("welcome")
})

const menuRouter = require("./routes/menuRouter")
app.use("/menu", menuRouter)


// comkmkemf

// import the router files    
const personRouter = require("./routes/personRoutes")

// use the import router files here 
app.use("/person", personRouter)



app.listen(PORT , ()=>{
    console.log("server running at 3000")
})