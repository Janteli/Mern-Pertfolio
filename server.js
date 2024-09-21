const express = require("express")
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
const app = express()
const path = require('path')
const cors = require('cors');
app.use(cors({
    origin: "https://mern-pertfolio-01.onrender.com"
}));

const portfolioRoute = require("./routes/portfolioRoute.js")

app.use(express.json());

app.use("/api/portfolio", portfolioRoute)

// deployment

const PORT = process.env.PORT || 4000
// dbConfig()
// deployment
if(process.env.NODE_ENV === "production")
{
    const dirPath = path.resolve()
    app.use(express.static("./client/dist"))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(dirPath, "./client/dist", "index.html"))
    })
}
app.listen(PORT, ()=>{
    console.log(`backend server is starting at ${PORT}`);
})