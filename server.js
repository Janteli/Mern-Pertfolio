const express = require("express")
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
const app = express()
const path = require('path')
const cors = require('cors');
app.use(cors());

const portfolioRoute = require("./routes/portfolioRoute.js")

app.use(express.json());

app.use("/api/portfolio", portfolioRoute)

// deployment

const PORT = process.env.PORT || 4000
// dbConfig()
// deployment
// const path = require("path")
if(process.env.NODE_ENV === "production")
{
    const dirPath = path.resolve()
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "client/build/index.html"))
    })
}
app.listen(PORT, ()=>{
    console.log(`backend server is starting at ${PORT}`);
})